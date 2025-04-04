import '../scss/style.scss';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firebaseConfig } from './firebase/app.js';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Регистрация компонентов Chart.js
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

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

  appContainer.innerHTML = `
    <div id="user-answers" class="user-answers-container">
      <h1>Ответы пользователей</h1>
      <canvas id="specialtyChart" width="400" height="200"></canvas>
    </div>
  `;
  const container = document.getElementById('user-answers');

  answers.forEach(answer => {
    const answerElement = document.createElement('div');
    answerElement.classList.add('answer-card');
    answerElement.innerHTML = `
      <h2 class="answer-user">Пользователь: ${answer.userId}</h2>
      <div class="answer-details">
        <p><strong>Результаты:</strong> ${JSON.stringify(answer.answers)}</p>
        <p><strong>Программа:</strong> ${answer.category}</p>
        <p><strong>Итоговая категория:</strong> ${answer.maxCategory}</p>
        <p><strong>Дата:</strong> ${new Date(answer.timestamp.seconds * 1000)}</p>
      </div>
    `;
    container.appendChild(answerElement);
  });

  // Render chart
  renderSpecialtyChart(answers);
}

function renderSpecialtyChart(answers) {
  const specialtyCounts = {
    "Инноватика": 0,
    "Бизнес-Информатика": 0,
  };

  answers.forEach(answer => {
    if (specialtyCounts[answer.category] !== undefined) {
      specialtyCounts[answer.category]++;
    }
  });

  const ctx = document.getElementById('specialtyChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(specialtyCounts),
      datasets: [{
        label: 'Количество пользователей',
        data: Object.values(specialtyCounts),
        backgroundColor: ['#4CAF50', '#007BFF'],
        borderColor: ['#388E3C', '#0056b3'],
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Распределение пользователей по специальностям',
        },
      },
    },
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