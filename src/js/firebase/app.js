import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAr_cNUJ67TIWd4gC7CPb4MnwJQJBKp32c",
  authDomain: "bizinformatica.firebaseapp.com",
  projectId: "bizinformatica",
  storageBucket: "bizinformatica.firebasestorage.app",
  messagingSenderId: "149697813785",
  appId: "1:149697813785:web:9645ee0c2a1d9325597988",
  measurementId: "G-M8BF9CXEQF"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const analytics = getAnalytics(app);

// Функция для сохранения ответов
export async function saveQuizAnswers(userId, answers) {
  try {
    // Добавление документа в коллекцию "quiz_answers"
    const docRef = await addDoc(collection(db, "quiz_answers"), {
      userId: userId,
      answers: answers,
      timestamp: new Date() // добавляем временную метку
    });

    // Выводим ID документа в консоль, чтобы знать, что всё прошло успешно
    console.log("Ответы успешно сохранены в Firestore. ID документа:", docRef.id);
  } catch (error) {
    console.error("Ошибка при сохранении ответов: ", error);
  }
}

// Сохранение данных
// saveQuizAnswers(userId, userAnswers);
