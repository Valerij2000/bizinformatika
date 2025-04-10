export const data = [
  // Студент инноватика
  [
    {
      title: "Когда всё идёт не по плану...",
      correctclass: 'smaller-header',
      description: "ВОПРОС &#8470;&nbsp;1",
      imgurl: `./img/b1.webp`,
      question: `
      <p>
        Как ты реагируешь на неожиданную проблему?
      </p>
      `,
      answers: [
        `<p class="answer__text">
          Паника! Где моя инструкция? 😱
        </p>`,
        `<p class="answer__text">
          Окей, попробуем пару решений и посмотрим, что сработает! 🛠️
        </p>`,
        `<p class="answer__text">
          Это вызов! Надо придумать что-то совершенно новое. 🚀
        </p>`,
        `<p class="answer__text">
          Позову команду – вместе разберёмся! 🤝
        </p>`,
      ],
      correct: 0,
      popup: {
        correct: `
          <p class="modal__text">
            😅 Не переживай, инновации — это навык, который можно развить! Важно не бояться проблем, а искать в них возможности. Начни с малого – пробуй решать нестандартные задачи и прокачивать гибкость мышления!
          </p>
          
        `,
        incorrect: `
        <p class="modal__text">
        🔥 Ты прирожденный новатор! Вместо паники ты видишь вызов и возможность придумать что-то по-настоящему уникальное. Именно такие люди двигают мир вперед и создают технологии будущего!          
        </p>
        
        `
      }
    },

    {
      title: "Название, которое изменит мир",
      correctclass: 'que4 smaller-header',
      description: "ВОПРОС &#8470;&nbsp;2",
      imgurl: `./img/b2.webp`,
      question: `
      <p>
        Представь, что ты изобрёл новый гаджет. Как его назовёшь?
      </p>
      `,
      answers: [
        `<p class="answer__text">
          "Супер-Пупер 3000" – главное, чтобы звучало круто! 💥
        </p>`,
        `<p class="answer__text">
          Название должно быть логичным и понятным, например, "Умный Браслет v2". 📲
        </p>`,
        `<p class="answer__text">
          Придумаю нечто уникальное, чтобы это стало брендом будущего! 🔥
        </p>`,
        `<p class="answer__text">
          Проведу исследование рынка и выберу лучшее название по трендам. 📊
        </p>`,
      ],
      correct: 0,
      popup: {
        correct: `
          <p class="modal__text">
            😂 Ну, с оригинальностью у тебя точно всё в порядке! Но чтобы идея заиграла, нужно еще понимать тренды и целевую аудиторию. Возможно, стоит немного углубиться в маркетинг и стратегию брендинга?
          </p>
        `,
        incorrect: `
        <p class="modal__text modal__text--w57">
          💡 Ты точно знаешь, что инновации – это не только идея, но и её подача! Креативность и умение выделиться – важные качества для инноватора. Возможно, твое имя скоро станет легендой в мире стартапов!
        </p>
        `
      }
    },

    {
      title: "Любишь ли ты играть с риском?",
      correctclass: 'que4',
      description: "ВОПРОС &#8470;&nbsp;3",
      imgurl: `./img/a3.webp`,
      question: `
      <p>
       Как ты относишься к риску?
      </p>     
      `,
      answers: [     
        `<p class="answer__text">
          Лучше без него – стабильность превыше всего. 🔵
        </p>`,   
        `<p class="answer__text">
          Если риск оправдан – почему бы и нет? 🟡
        </p>`,
        `<p class="answer__text">
          Риск – двигатель прогресса! Нужно пробовать новое. 🔴
        </p>`,        
        `<p class="answer__text">
          Главное – анализировать риски и минимизировать потери. ⚖️
        </p>`,
      ],
      correct: 0,
      popup: {
        correct: `
        <p class="modal__text">
          😌 Стабильность – это хорошо, но в инновациях она редко встречается. Попробуй выходить из зоны комфорта и тестировать новые идеи – иногда именно неожиданные решения приводят к революционным открытиям!
        </p>
        `,
        incorrect: `
        <p class="modal__text modal__text--w57">
          🚀 Ты настоящий первопроходец! Великие инновации рождаются там, где другие боятся рисковать. Главное – балансировать между смелостью и расчетом, и тогда успех неизбежен!
        </p>
        
        `
      }
    },

    {
      title: "Если бы у тебя был 1 миллиард на стартап…",
      correctclass: 'smaller-header',
      description: "ВОПРОС &#8470;&nbsp;4",
      imgurl: `./img/a4.webp`,
      question: `
      <p>
       Тебе дают миллиард долларов на стартап. Что ты сделаешь?
      </p>
      `,
      answers: [   
        `<p class="answer__text">
          Куплю остров и отдохну! 🏝️
        </p>`,     
        `<p class="answer__text">
          Вложу в проверенные технологии и заработаю ещё больше. 📈
        </p>`,
        `<p class="answer__text">
          Придумаю прорывной проект, который изменит мир! 🌍
        </p>`,
        `<p class="answer__text">
          Соберу команду экспертов и разработаю стратегию развития. 🏆
        </p>`,        
      ],
      correct: 0,
      popup: {
        correct: `
        <p class="modal__text">
          🏝️ Отдых – это, конечно, важно... но представь, если бы Илон Маск или Стив Джобс выбрали такой путь? Возможно, твоя идея способна сделать мир лучше – почему бы не попробовать? 😉
        </p> 
        
        `,
        incorrect: `
        <p class="modal__text modal__text--w57">
          🌍 Мир нуждается в таких людях, как ты! У тебя глобальное мышление и амбиции, а это именно то, что двигает человечество вперед. Остается только найти команду и начать воплощать идеи!
        </p>
        `
      }
    }
  ],
  // Студент бизнес информатика
  [
    {
      title: "Паника или план?",
      correctclass: 'que4',
      description: "ВОПРОС &#8470;&nbsp;1",
      imgurl: `./img/b1.webp`,
      question: `
      <p>
        Что ты сделаешь, если на работе внезапно сломалась вся система?
      </p>
      `,
      answers: [
        `<p class="answer__text">
          Позвоню в техподдержку и подожду решения. ☎️
        </p>`,
        `<p class="answer__text">
          Начну разбираться сам – вдруг найду причину? 🛠️
        </p>`,
        `<p class="answer__text">
          Использую эту ситуацию, чтобы предложить новую, более надежную систему! 💡
        </p>`,
        `<p class="answer__text">
          Подключу всех, кто может помочь, и организую процесс решения. 🤝
        </p>`,
      ],
      correct: 0,
      popup: {
        correct: `
        <p class="modal__text">
          😅 Ну, ждать – тоже стратегия... но не самая лучшая! В бизнес-информатике важны инициативность и проактивный подход. Попробуй в следующий раз поискать решение сам – вдруг именно ты найдешь способ улучшить систему?
        </p>
          
        `,
        incorrect: `
        <p class="modal__text">
          🚀 Вот это подход! Ты не просто решаешь проблему, а ищешь возможности для улучшения. Именно так думают бизнес-информатики — не тушат пожары, а делают так, чтобы они не возникали!
        </p>
        
        `
      }
    },

    {
      title: "Объясни бабушке, чем ты занимаешься",
      correctclass: 'que4 smaller-header',
      description: "ВОПРОС &#8470;&nbsp;2",
      imgurl: `./img/b2.webp`,
      question: `
      <p>
        Как бы ты описал программу "Бизнес-информатика" простыми словами?
      </p>
      `,
      answers: [   
        `<p class="answer__text">
          "Ну... там и бизнес, и компьютеры... сложно объяснить!" 🤷‍♂️
        </p>`,     
        `<p class="answer__text">
          "Это человек, который помогает компаниям зарабатывать с помощью технологий." 💻💰
        </p>`,
        `<p class="answer__text">
          "Я создаю цифровое будущее! Представь, что ты заказываешь еду в один клик – это моя работа!" 🚀
        </p>`,        
        `<p class="answer__text">
          "Я оптимизирую бизнес-процессы с помощью ИТ, чтобы компания работала эффективнее." 📈
        </p>`,
      ],
      correct: 0,
      popup: {
        correct: `
          <p class="modal__text">
            😂 Сложно? Может быть! Но умение объяснять – важный навык для бизнес-информатика. Ведь если ты не можешь объяснить, чем занимаешься, как же ты продашь свою идею? Попробуй потренироваться, и тебе точно станет проще!
          </p>
        `,
        incorrect: `
        <p class="modal__text modal__text--w57">
          💡 Ты умеешь просто объяснять сложные вещи – редкий талант! Бизнес-информатики именно этим и занимаются – делают технологии удобными для людей и помогают компаниям идти в ногу со временем!
        </p>
          `
      }
    },

    {
      title: "Как ты принимаешь решения?",
      correctclass: '',
      description: "ВОПРОС &#8470;&nbsp;3",
      imgurl: `./img/b3.webp`,
      question: `
      <p>
       Какой у тебя стиль мышления?
      </p>
      `,
      answers: [        
        `<p class="answer__text">
          Интуитивно – если чувствую, что правильно, значит, так и есть! ✨
        </p>`,
        `<p class="answer__text">
          Собираю максимум информации и анализирую. 📊
        </p>`,        
        `<p class="answer__text">
          Экспериментирую и выбираю лучший вариант! 🔄
        </p>`,
        `<p class="answer__text">
          Провожу SWOT-анализ, считаю риски и строю стратегию. 📉📈
        </p>`
      ],
      correct: 0,
      popup: {
        correct: `
        <p class="modal__text">
          🤔 Интуиция – это здорово, но в бизнес-информатике нужны факты! Попробуй добавить немного анализа к своим решениям – тогда твоя интуиция станет еще сильнее!
        </p>
        
        `,
        incorrect: `
        <p class="modal__text">
          📊 Вот это уровень! Аналитический подход – основа бизнес-информатики. Если ты умеешь продумывать всё наперёд, значит, у тебя уже есть один из ключевых навыков успешного специалиста!
        </p>
        
        `
      }
    },

    {
      title: "Чего ты ждёшь от работы?",
      correctclass: 'smaller-header que1',
      description: "ВОПРОС &#8470;&nbsp;4",
      imgurl: `./img/b4.webp`,
      question: `
      <p>
        Что для тебя важнее всего в профессии?
      </p>
      `,
      answers: [
        `<p class="answer__text">
          Стабильность и понятные задачи. 🔵
        </p>`,
        `<p class="answer__text">
          Возможность постоянно учиться новому. 📚
        </p>`,
        `<p class="answer__text">
          Влияние на развитие бизнеса и технологий. 🚀
        </p class="answer__text">`,
        `<p class="answer__text">
          Управление процессами и командами. 🏆
        </p>`,
      ],
      correct: 0,
      popup: {
        correct: `
        <p class="modal__text">
          😊 Стабильность – это хорошо, но в мире технологий всё постоянно меняется! Если ты хочешь стать крутым специалистом, попробуй выходить за рамки привычного – бизнес-информатика любит тех, кто готов учиться и меняться вместе с миром!
        </p>
        `,
        incorrect: `
        <p class="modal__text modal__text--w50">
          🔥 Ты – двигатель прогресса! Бизнес-информатика – это про влияние и развитие. Если тебе важно не просто работать, а менять правила игры, то ты выбрал правильное направление!
        </p>
        `
      }
    }
  ],
]


// * Template
// correct: `
//   <p class="modal__text">
//     По&nbsp;телефону специализированной горячей линии пациент сможет получить наиболее полную информацию&nbsp;о:
//   </p>
  // <ul class="modal__list">
  //   <li class="w60">Общая информация по&nbsp;заболеванию и&nbsp;способам&nbsp;лечения</li>
  //   <li class="w40">Пациентских<br>сервисах и&nbsp;организациях</li>
  //   <li class="w60">Региональной клинике, подходящей именно ему</li>
  //   <li class="w40">Федеральных центрах экспертизы</li>
  // </ul>
  
// `,