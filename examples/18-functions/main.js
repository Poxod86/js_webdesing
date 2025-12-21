// Объявление функций

function greet(name) {
  return `Привет, ${name}`;
}

console.log(greet('Анна'));

// Функциональное выражение

const greetConst = function(name) {
  return `Привет, ${name}`;
}

console.log(greetConst('Анна'));

// Стрелочные функции

const greetArrow = (name) => `Привет, ${name}`;
console.log(greetArrow('Анна'));

// Параметры и аргументы

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

// Значение по умолчанию

function greet(name = 'Гость') {
  return `Привет, ${name}`;
}
console.log(greet());

// Возврат значений

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4));

// Ещё один пример

function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32; // Формула перевода
}
console.log(celsiusToFahrenheit(25));

// Найдём максимальное число в массиве

let numbers = [3, 7, 2, 9, 1];

function findMax(numbersArg) {
  let max = numbersArg[0];

  for (let num of numbersArg) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

console.log(findMax(numbers));

// Генератор случайного пароля заданной длины

function genereratePassword(length) {
  const chars = 'ABCDEabcde0123456789!@#$%^&*';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

console.log(genereratePassword(8));

// Запуск таймера обратного отсчёта

function startCountDown(seconds) {
  let remaining = seconds;

  const timer = setInterval(() => {
    console.log(`Осталось: ${seconds} сек.`);

    seconds--;

    if (seconds < 0) {
      clearInterval(timer);
      console.log('Время вышло!');
      console.log(`Изначальный аргумент ${remaining}`);
    }
  }, 1000);
}

// startCountDown(5);

// Функция с обязательными аргументами
// Площадь прямоугольника

function calculateArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new Error('Ширина и высота должны быть числами');
  }

  if (width <= 0 || height <= 0) {
    throw new Error('Размеры должны быть положительными числами');
  }

  return width * height;
}

console.log(calculateArea(22, 12));

// Функция с аргументами по умолчанию
// Форматируем приветствие для пользователя

function greetUser(name, title = 'Гость', formal = false) {
  if (formal) {
    return `Уважаемый(ая) ${title} ${name}, добро пожаловать!`;
  } else {
    return `Привет, ${name} (${title})!`;
  }
}

console.log(greetUser('Анна'));
console.log(greetUser('Иван', 'Доктор'));
console.log(greetUser('Вадим', 'Механик', true));

// Создадим описание пользователя

function createUserDescription({ name, age, city = 'Не указан' }) {
  if (!name || !age) {
    throw new Error('Имя и возраст обязательны!');
  }

  return `${name}, ${age} лет, город: ${city}`;
}

const user = {
  name: 'Мария',
  age: 28,
  city: 'Москва'
}

console.log(createUserDescription(user));
console.log(createUserDescription({ name: 'Алексей', age: 32 }));

// Валидация E-mail

const validEmail = (email) => email.includes('@') ? true : false;

console.log(validEmail('ilon@musk.com'));
