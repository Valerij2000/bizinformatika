import '../scss/style.scss';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firebaseConfig } from './firebase/app.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function fetchUserAnswers() {
  const answersCol = collection(db, 'quiz_answers');
  const answerSnapshot = await getDocs(answersCol);
  const answerList = answerSnapshot.docs.map(doc => doc.data());
  return answerList;
}

function displayUserAnswers(answers) {
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

init();