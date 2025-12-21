let age = 16;

if (age <= 0) console.log('Ты еще не родился')
else if (age >= 18) {
  console.log('Ты - совершеннолетний')
} else {
  console.log('Ты - несовершеннолетний')
}

let isStudent = false;

if (isStudent) {
  console.log('Ты студент')
} else {
  console.log('Ты не студент')
}

let score = 100;
if (score >= 90) {
  console.log('🟢 Отлично!');
} else if (score >= 60) {
  console.log('🟠 Хорошо!');
} else {
  console.log('🔴 Попробуй еще раз!');
}

// Вложенные условия

let youAge = 18;
let hasLicense = true;

if (youAge >= 18) {
  if (hasLicense) {
    console.log('🟢 Ты можешь водить машину');
  } else {
    console.log('🔴 У тебя нет прав, ты не можешь водить машину');
  }
} else {
  console.log('🔴 Ты слишком молод, чтобы водить машину');
}

// Логические операторы (&&, ||)

if (youAge >= 18 && hasLicense) {
  console.log('🟢 Ты можешь водить машину');
} else {
  console.log('🔴 Ты не можешь водить машину');
}

if (youAge < 18 || !hasLicense) {
  console.log(youAge < 18 ? '🔴 Ты слишком молод' : '🔴 У тебя нет прав');
} else {
  console.log('🟢 Ты можешь водить машину');
}

// Объект с условиями

const message = {
  tooYoung: 'Ты слишком молод',
  noLicense: 'У тебя нет прав',
  canDrive: 'Ты можешь водить машину'
}

console.log(youAge < 18 ? message.tooYoung : hasLicense ? message.canDrive : message.noLicense);

// Приложение по возрасту

const form = document.querySelector('.age-form');
const ageInput = document.querySelector('.you-age');
const displayResult = document.querySelector('.display-result');

let ageOptions = [];

const loadData = async () => {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    ageOptions = data.ageOptions;

    console.log('🟢 Данные загружены');
  } catch (error) {
    console.log('❌ Ошибка при загрузке данных', error);
  }
}

const processAge = () => {
  const age = ageInput.value.trim();
  const ageNumber = Number(age);

  if (age === '') {
    displayResult.textContent = '❌ Пожалуйста, введите возраст';
    return;
  }

  if (isNaN(ageNumber)) {
    displayResult.textContent = '❌ Введите корректное значение';
    return;
  }

  let message = '❌ Ошибка: возраст не найден';

  for (const option of ageOptions) {
    if (ageNumber >= option.min && ageNumber <= option.max) {
      message = option.message;
      break;
    }
  }

  displayResult.textContent = message;
}

window.addEventListener('load', async () => {
  await loadData();
  processAge();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  processAge();
});
