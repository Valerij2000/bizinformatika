export const data = [
  [
    {
      title: "Пациент А: анамнез",
      correctclass: '',
      description: "ВОПРОС &#8470;&nbsp;1",
      imgurl: `./img/a1.svg`,
      question: `
      <p>
        Поступил с&nbsp;острым тромбозом верхнебрыжеечной вены 
        и&nbsp;ее&nbsp;ветвей. Удалена большая часть тонкой кишки.
        Длина сохранившегося отрезка&nbsp;&mdash; 70&nbsp;см.
      </p>
      <p>
        Как Вы&nbsp;сформулируете диагноз, чтобы он&nbsp;звучал корректно:
      </p>
      `,
      answers: [
        `<p class="answer__text">
          Острый тромбоз верхнебрыжеечной вены и&nbsp;ее&nbsp;ветвей
        </p>`,
        `<p class="answer__text">
          Острый тромбоз верхнебрыжеечной вены и&nbsp;ее&nbsp;ветвей. Резекция тонкой кишки. Остаточная длина кишки 70&nbsp;см
        </p>`,
        `<p class="answer__text">
          Острый тромбоз верхнебрыжеечной вены и&nbsp;ее&nbsp;ветвей. Резекция тонкой кишки. Остаточная длина менее&nbsp;50%
        </p>`,
        // `<p></p>`,
      ],
      correct: 1,
      popup: {
        correct: `
          <p class="modal__text">
            Данный диагноз содержит точные характеристики проявлений болезни у&nbsp;конкретного пациента, включая точное указание остаточной длины тонкой кишки, которые показывают выраженность и&nbsp;индивидуальные особенности заболевания.
          </p>
          
        `,
        incorrect: `
        <p class="modal__text">
          Данный диагноз не&nbsp;содержит точных характеристик и&nbsp;индивидуальных особенностей заболевания пациента, в&nbsp;частности остаточную длину кишки, что затрудняет выбор терапии. Попробуйте сделать другой выбор.
        </p>
        
        `
      }
    },

    {
      title: "Встреча с&nbsp;пациентом&nbsp;А в&nbsp;стационаре",
      correctclass: 'que4 smaller-header',
      description: "ВОПРОС &#8470;&nbsp;2",
      imgurl: `./img/a2.svg`,
      question: `
      <p>
        Пациент лежит в&nbsp;стационаре, находится в&nbsp;сознании. Состояние нестабильное, есть нарушения пищеварения, снижение массы тела, жидкий стул.
        </p>
        <p>
        Пациенту сообщили о&nbsp;диагнозе, но&nbsp;он&nbsp;не&nbsp;понимает, как дальше ему жить с&nbsp;этим диагнозом, и&nbsp;спрашивает Вас, что ему делать после выписки. Какую рекомендацию&nbsp;Вы дадите пациенту:
      </p>
      `,
      answers: [
        `<p class="answer__text">
          Обратиться к&nbsp;гастроэнтерологу по&nbsp;месту жительства, где ему ответят на&nbsp;все вопросы
        </p>`,
        `<p class="answer__text">
          Обратиться по&nbsp;номеру горячей линии для пациентов с&nbsp;обширной резекцией тонкой кишки. Там ему смогут ответить на&nbsp;все вопросы
        </p>`,
        `<p class="answer__text">
          Обратиться в&nbsp;местный департамент здравоохранения. Там ему смогут ответить на&nbsp;все вопросы
        </p>`,
        `<p class="answer__text">
          Обратиться в&nbsp;местный медицинский ВУЗ. Там на&nbsp;кафедре гастроэнтерологии ему смогут ответить на&nbsp;все вопросы
        </p>`,
      ],
      correct: 1,
      popup: {
        correct: `
          <p class="modal__text">
            По&nbsp;телефону специализированной горячей линии пациент сможет получить наиболее полную информацию&nbsp;о:
          </p>
          <ul class="modal__list">
            <li class="w60">Общая информация по&nbsp;заболеванию и&nbsp;способам&nbsp;лечения</li>
            <li class="w40">Пациентских<br>сервисах и&nbsp;организациях</li>
            <li class="w60">Региональной клинике, подходящей именно ему</li>
            <li class="w40">Федеральных центрах экспертизы</li>
          </ul>
          
        `,
        incorrect: `
        <p class="modal__text modal__text--w57">
          Синдром короткой кишки&nbsp;&mdash; редкое хроническое инвалидизирующее и&nbsp;потенциально опасное для жизни состояние, требующее узкоспециализированного подхода, который не&nbsp;всегда может быть обеспечен в&nbsp;обычных медицинских учреждениях. Изучите&nbsp;другие&nbsp;варианты.
        </p>
        
        `
      }
    },

    {
      title: "Новая угроза",
      correctclass: 'que4',
      description: "ВОПРОС &#8470;&nbsp;3",
      imgurl: `./img/a2.svg`,
      question: `
      <p>
        Пациент&nbsp;А, находясь в&nbsp;стационаре, начал стремительно терять в&nbsp;массе. Очевидно, что сохранившегося размера тонкой кишки недостаточно для адекватного восполнения питательных веществ. Для этого необходимо парентеральное питание, но&nbsp;в&nbsp;учреждении нет возможности его назначить и&nbsp;рассчитать необходимый объем.
      </p>
      <p>
        Где пациенту смогут назначить парентеральное питание максимально быстро?
      </p>
      `,
      answers: [
        `<p class="answer__text">
          По&nbsp;телефону горячей линии, переданной пациенту ранее
        </p>`,
        `<p class="answer__text">
          Дистанционно во&nbsp;время телемедицинской консультации с&nbsp;федеральным центром экспертизы во&nbsp;время нахождения в&nbsp;стационаре
        </p>`,
        `<p class="answer__text">
          В&nbsp;поликлинике по&nbsp;месту жительства после выписки из&nbsp;стационара
        </p>`,
        `<p class="answer__text">
          Только очно во&nbsp;время госпитализации в&nbsp;федеральный центр экспертизы
        </p>`,
      ],
      correct: 1,
      popup: {
        correct: `
        <p class="modal__text">
          Телемедицинская консультация с&nbsp;федеральным центром экспертизы позволит в&nbsp;кратчайшие сроки назначить парентеральное питание и&nbsp;рассчитать его необходимый объем для пациента.
        </p>
        
        `,
        incorrect: `
        <p class="modal__text modal__text--w57">
          Пациент срочно нуждается в&nbsp;парентеральном питании, поэтому задача врача&nbsp;&mdash; обеспечить решение вопроса в&nbsp;кратчайшие сроки. Посмотрите, какой из&nbsp;вариантов больше отвечает данному&nbsp;запросу.
        </p>
        
        `
      }
    },

    {
      title: "Как еще можно помочь пациенту?",
      correctclass: 'smaller-header',
      description: "ВОПРОС &#8470;&nbsp;4",
      imgurl: `./img/a4.svg`,
      question: `
      <p>
        Телемедицинская консультация проведена, рекомендации по&nbsp;назначению парентерального питания по&nbsp;жизненным показаниям получены. Но&nbsp;пациенту придется всю жизнь провести со&nbsp;сложным диагнозом. 
      </p>
      <p>
        Что&nbsp;бы Вы&nbsp;указали в&nbsp;рекомендациях при выписке в&nbsp;качестве дальнейших действий:
      </p>
      `,
      answers: [
        `<p class="answer__text">
          Отмену парентерального питания через 3&ndash;4 месяца после стабилизации состояния
        </p>`,
        `<p class="answer__text">
          Решение вопроса о&nbsp;целесообразности назначения патогенетической терапии (тедуглудит) с&nbsp;целью уменьшения зависимости от&nbsp;парентерального питания через 3&ndash;4 месяца после стабилизации
        </p>`,
        `<p class="answer__text">
          Трансплантацию тонкой кишки через 3&ndash;4 месяца после стабилизации
        </p>`,
        // `<p></p>`,
      ],
      correct: 1,
      popup: {
        correct: `
        <p class="modal__text">
          Патогенетическая терапия способна снизить зависимость от&nbsp;парентерального питания, что может улучшить долгосрочный прогноз пациента с&nbsp;синдромом короткой&nbsp;кишки.
        </p> 
        
        `,
        incorrect: `
        <p class="modal__text modal__text--w57">
          Такое решение может привести к&nbsp;ухудшению течения заболевания, осложнениям и&nbsp;угрозе жизни.
        </p>
        
        `
      }
    }
  ],
  [
    {
      title: "Пациент&nbsp;В: анамнез",
      correctclass: 'que4',
      description: "ВОПРОС &#8470;&nbsp;1",
      imgurl: `./img/b1.svg`,
      question: `
      <p>
        Поступил к&nbsp;хирургу с&nbsp;ножевым ранением в&nbsp;область живота, вследствие чего была резецирована тонкая кишка. Остаточная длина кишки&nbsp;&mdash; 100&nbsp;см.
      </p>
      <p>
        Как Вы&nbsp;сформулируете диагноз, чтобы он&nbsp;звучал корректно:
      </p>
      `,
      answers: [
        `<p class="answer__text">
          Резекция тонкой кишки
        </p>`,
        `<p class="answer__text">
          Частичная резекция тонкой кишки
        </p>`,
        `<p class="answer__text">
          Субтотальная резекция тонкой кишки
        </p>`,
        `<p class="answer__text">
          Резекция тонкой кишки: остаточная длина&nbsp;&mdash; 100&nbsp;см
        </p>`,
      ],
      correct: 3,
      popup: {
        correct: `
        <p class="modal__text">
          Данный диагноз содержит точные характеристики проявлений болезни у&nbsp;конкретного пациента, включая точное указание остаточной длины тонкой кишки, которые показывают выраженность и&nbsp;индивидуальные особенности заболевания.
        </p>
          
        `,
        incorrect: `
        <p class="modal__text">
          Данный диагноз не&nbsp;содержит точных характеристик и&nbsp;индивидуальных особенностей заболевания пациента, в&nbsp;частности остаточную длину кишки, что затрудняет выбор терапии. Попробуйте сделать другой выбор.
        </p>
        
        `
      }
    },

    {
      title: "Встреча с&nbsp;пациентом&nbsp;В в&nbsp;стационаре",
      correctclass: 'que4 smaller-header',
      description: "ВОПРОС &#8470;&nbsp;2",
      imgurl: `./img/b2.svg`,
      question: `
      <p>
        Пациент в&nbsp;послеоперационном периоде находится в&nbsp;стационаре. К&nbsp;посещению пациента допущены родственники. Состояние средней тяжести, отмечается нарушение стула, расстройство пищеварения, снижение массы тела.
      </p>
      <p>
        Ни&nbsp;пациент, ни&nbsp;его близкие не&nbsp;понимают, как в&nbsp;дальнейшем пациенту самостоятельно питаться и&nbsp;где наблюдаться. Как Вы&nbsp;будете действовать?
      </p>
      `,
      answers: [
        `<p class="answer__text">
          Дадите номер регистратуры и&nbsp;адрес сайта кафедральной клиники ближайшего медицинского ВУЗа для дальнейшей консультации после выписки
        </p>`,
        `<p class="answer__text">
          Рекомендуете как можно быстрее оформить инвалидность для решения всех дальнейших проблем
        </p>`,
        `<p class="answer__text">
          Передадите номер горячей линии для пациентов с&nbsp;обширными резекциями тонкой кишки
        </p>`,
        `<p class="answer__text">
          Правильного ответа нет: помощь, включая информационную, будет оказана при наблюдении в&nbsp;поликлинике по&nbsp;месту жительства
        </p>`,
      ],
      correct: 2,
      popup: {
        correct: `
          <p class="modal__text">
            По&nbsp;телефону специализированной горячей линии пациент сможет получить наиболее полную информацию&nbsp;о:
          </p>
          <ul class="modal__list">
            <li class="w60">Общая информация по&nbsp;заболеванию и&nbsp;способам&nbsp;лечения</li>
            <li class="w40">Пациентских<br>сервисах и&nbsp;организациях</li>
            <li class="w60">Региональной клинике, подходящей именно ему</li>
            <li class="w40">Федеральных центрах экспертизы</li>
          </ul>
          
        `,
        incorrect: `
        <p class="modal__text modal__text--w57">
          Синдром короткой кишки&nbsp;&mdash; редкое хроническое инвалидизирующее и&nbsp;потенциально опасное для жизни состояние, требующее узкоспециализированного подхода, который не&nbsp;всегда может быть обеспечен в&nbsp;обычных медицинских учреждениях. Изучите&nbsp;другие&nbsp;варианты.
        </p>
        
          `
      }
    },

    {
      title: "Новая угроза",
      correctclass: '',
      description: "ВОПРОС &#8470;&nbsp;3",
      imgurl: `./img/b2.svg`,
      question: `
      <p>
        Пациент готовится к&nbsp;выписке. Тем не&nbsp;менее, расстройства пищеварения сохраняются. Пациент стремительно теряет массу тела. 
      </p>
      <p>
        Становится очевидным, что сохраняющегося отрезка тонкой кишки недостаточно для полноценного питания. В&nbsp;то&nbsp;же время, в&nbsp;рамках лечебного учреждения нет возможности рассчитать и&nbsp;назначить парентеральное питание. 
      </p>
      <p>
        Что можно сделать в&nbsp;таком случае?
      </p>
      `,
      answers: [
        `<p class="answer__text">
          Нет возможности что-либо сделать. Парентеральное питание будет назначено по&nbsp;месту жительства.
        </p>`,
        `<p class="answer__text">
          Провести телемедицинскую консультацию с&nbsp;федеральным центром экспертизы для решения вопроса о&nbsp;назначении парентерального питания.
        </p>`,
        `<p class="answer__text">
          В&nbsp;выписном эпикризе указать рекомендацию посетить федеральный центр экспертизы для решения вопроса о&nbsp;назначении парентерального питания.
        </p>`
      ],
      correct: 1,
      popup: {
        correct: `
        <p class="modal__text">
          Телемедицинская консультация с&nbsp;федеральным центром экспертизы позволит в&nbsp;кратчайшие сроки назначить парентеральное питание и&nbsp;рассчитать его необходимый объем для пациента.
        </p>
        
        `,
        incorrect: `
        <p class="modal__text">
          Пациент срочно нуждается в&nbsp;парентеральном&nbsp;питании, поэтому задача врача&nbsp;&mdash; обеспечить решение вопроса в&nbsp;кратчайшие сроки. Посмотрите, какой из&nbsp;вариантов больше отвечает данному&nbsp;запросу.
        </p>
        
        `
      }
    },

    {
      title: "Как еще можно помочь пациенту?",
      correctclass: 'smaller-header que1',
      description: "ВОПРОС &#8470;&nbsp;4",
      imgurl: `./img/b4.svg`,
      question: `
      <p>
        Телемедицинская консультация проведена, рекомендации по&nbsp;назначению парентерального питания по&nbsp;жизненным показаниям получены.
      </p>
      <p>
        Что еще можно указать в&nbsp;рекомендациях, чтобы помочь пациенту?
      </p>
      `,
      answers: [
        `<p class="answer__text answer__text--fssmall">
          Через 3&ndash;4 месяца после стабилизации пациента&nbsp;&mdash; решение вопроса о&nbsp;целесообразности назначения патогенетической терапии (тедуглутид) с&nbsp;целью снижения зависимости от&nbsp;парентерального питания
        </p>`,
        `<p class="answer__text">
          Через 3&ndash;4 месяца после стабилизации&nbsp;&mdash; повторная госпитализация для решения вопроса об&nbsp;отмене парентерального питания
        </p>`,
        `<p class="answer__text">
          Через 3&ndash;4 месяца после стабилизации&nbsp;&mdash; проведение трансплантации тонкой кишки
        </p>`,
        // `<p></p>`,
      ],
      correct: 0,
      popup: {
        correct: `
        <p class="modal__text">
          Патогенетическая терапия способна снизить зависимость от&nbsp;парентерального питания, что может улучшить долгосрочный прогноз пациента с&nbsp;синдромом короткой&nbsp;кишки.
        </p>
          
        `,
        incorrect: `
        <p class="modal__text modal__text--w50">
          Такое решение может привести к&nbsp;ухудшению течения заболевания, осложнениям и&nbsp;угрозе жизни.
        </p>
        
        `
      }
    }
  ],
]