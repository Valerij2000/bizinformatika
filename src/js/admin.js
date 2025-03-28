import '../scss/style.scss';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firebaseConfig } from './firebase/app.js';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function adminLogin(email, password, authButton) {
  let timeoutId;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // console.log("Вход выполнен:", userCredential.user);
    init();
  } catch (error) {
    authButton.textContent = 'Ошибка аутентификации';
    console.error("Ошибка аутентификации:", error);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      authButton.disabled = false;
      authButton.textContent = "Войти";
    }, 5000);
  }
}

async function fetchUserAnswers() {
  try {
    const answersCol = collection(db, 'quiz_answers');
    const answerSnapshot = await getDocs(answersCol);

    if (answerSnapshot.empty) {
      console.warn("Нет данных в quiz_answers.");
      return [];
    }

    return answerSnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error("Ошибка при загрузке ответов:", error);
    return [];
  }
}

function displayUserAnswers(answers) {
  const appContainer = document.querySelector('#app');
  if (!appContainer) {
    console.error("Элемент #app не найден в DOM!");
    return;
  }

  appContainer.innerHTML = '<div id="user-answers"></div>';
  const container = document.getElementById('user-answers');

  answers.forEach(answer => {
    const answerElement = document.createElement('div');
    answerElement.innerHTML = `
      <h2>Пользователь: ${answer.userId}</h2>
      <p>Результаты: ${JSON.stringify(answer.answers)}</p>
      <p>Итоговая категория: ${answer.maxCategory}</p>
    `;
    container.appendChild(answerElement);
  });
}

async function init() {
  const answers = await fetchUserAnswers();
  displayUserAnswers(answers);
}

document.addEventListener("DOMContentLoaded", () => {
  const adminForm = document.querySelector("#admin-form");
  const authButton = document.querySelector("#auth-btn");

  adminForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    authButton.disabled = true;
    authButton.textContent = "Вход...";

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (!email || !password) {
      authButton.disabled = false;
      authButton.textContent = "Войти";
      return;
    }

    try {
      await adminLogin(email, password, authButton);
    } catch (error) {
      authButton.disabled = false;
      authButton.textContent = "Войти";
    }
  });
});