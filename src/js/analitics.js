
// (1) Выбрал пациента 1
export function choosePlayerOneAnalitics() {
  // console.log('choosePlayerOneAnalitics');
  
  window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
    'event': 'choice_1_patient', // Название события
    'user_id': undefined
  });
}

// (1) Выбрал пациента 1
export function choosePlayerTwoAnalitics() {
  // console.log('choosePlayerTwoAnalitics');
  
  window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
    'event': 'choice_2_patient', // Название события
    'user_id': undefined
  });
}

// (3) Прошел пациента 1
export function finishedPatientOneAnalitics() {
  // console.log('finishedPatientOneAnalitics');
  
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'completed_1_patient', // Название события
    'user_id': undefined
  });
}

// (3) Прошел пациента 2
export function finishedPatientTwoAnalitics() {
  // console.log('finishedPatientTwoAnalitics');
  
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'completed_2_patient', // Название события
    'user_id': undefined
  });
}