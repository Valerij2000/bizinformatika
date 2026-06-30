export const finalScreen = `
  <div class="final">
    <img class="final__img" src="./img/final-earth.png" alt="">
    <h2 class="main-header final__header">Подсчет результатов</h2>
    <div class="final__desc">
      <p id="quiz-result">Тебе нравится комфорт и стабильность, но бизнес-информатика требует гибкости!</p>
      <p>
        Теперь ты можешь сохранить полезные материалы <span class="nowrap">по направлению</span> подготовки <span
          id="quiz-disclaimer"></span>!
      </p>
    </div>
    <div class="final__btns">
      <button id="startgame" class="btn green-btn">Вернуться в&nbsp;начало</button>     
      <button class="btn button-ai orange-btn">
        <span class="tooltip-badge tooltip-badge-btn">NEW</span>        
        Личный AI-консультант
      </button>
    </div>
    <div class="social-bar">
      <a href="https://t.me/voity_v_IT_2025" class="social-link" target="_blank">
        <img src="./img/tg.png" alt="Telegram канал кафедры">
      </a>
      <a href="https://vk.com/business_inform_donnu" class="social-link" target="_blank">
        <img src="./img/vk.png" alt="Группа ВКонтакте кафедры">
      </a>
      <a href="https://max.ru/join/eVtSiMV90WfLATEW9Pp2oUfq0IwjNkMqRDDZ3HnrdAU" class="social-link" target="_blank">
        <img src="./img/max.svg" alt="Канал кафедры в MAX">
      </a>      
    </div>
    <button class="btn final__btn" id="downloadDoc">
      Скачать памятку <img class="final__tg" src="./img/download-ico.png" alt="">
    </button>
  </div>
`;

const ai = `
<button class="button-ai social-link">
  <span class="tooltip-badge">NEW</span>
  <img src="./img/ai.png" alt="Персональный Ai помощник">
</button>
`;