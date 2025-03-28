import { generateUserId } from "./userId";
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
const db = getFirestore(app);
const analytics = getAnalytics(app);

const userCategoryMapping = {
  0: "Инноватика",
  1: "Бизнес-Информатика"
};

// Функция для сохранения ответов
async function saveQuizAnswers(userId, answers, maxCategory) {
  try {
    // Получаем название категории в зависимости от userId
    const categoryName = userCategoryMapping[userId] || "Неизвестная категория";

    // Добавление документа в коллекцию "quiz_answers"
    const docRef = await addDoc(collection(db, "quiz_answers"), {
      userId: generateUserId(),
      category: categoryName,
      answers: answers,
      maxCategory: maxCategory,
      timestamp: new Date()
    });
    
    // console.log("Ответы успешно сохранены в Firestore. ID документа:", docRef.id);
  } catch (error) {
    console.error("Ошибка при сохранении ответов: ", error);
  }
}

export { saveQuizAnswers, firebaseConfig };