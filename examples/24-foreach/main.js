// Базовый синтаксис

// array.forEach(function(element, index, array) {
//   // Код, который будет выполнен для каждого элемента
// });

// Или:

// array.forEach((e, i, a) => {
//   // Код, который будет выполнен для каждого элемента
// });

const fruits = ['🍎 Яблоко', '🍌 Банан', '🍊 Мандарин'];

fruits.forEach(function(element, index) {
  console.log(`${index}. ${element}`);
})

console.log('===');

const myFruits = ['🍎 Яблоко', '🍌 Банан', '🍊 Мандарин'];

myFruits.forEach((e, i) => {
  console.log(`${i + 1}. ${e}`);
})

console.log('===');

// Пример с массивом

const yourFruits = ['🍎 Яблоко', '🍌 Банан', '🍊 Мандарин'];

yourFruits.forEach((e, i, a) => {
  console.log(`Индекс: ${i},
  Элемент: ${e},
  Длина массива: ${a.length}`);
})

console.log('===');

const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2));

// Особенности forEach

// 1. Нет возвращаемого значения

const myNumbers = [1, 2, 3];

const result = myNumbers.forEach(num => console.log(num));
console.log(result);
myNumbers.forEach(num => console.log(num));

// 2. Нельзя прервать цикл

// 3. Сложности с изменением массива
// Лучше так не делать 👇

const yourNumbers = [1, 2, 3];
yourNumbers.forEach((num, index, arr) => {
  arr[index] = num * 2;
})
console.log(yourNumbers);

// Вывод списка задач

const items = document.querySelectorAll('.item');

const tasks = ['Купить молоко', 'Позвонить другу', 'Изучить JavaScript'];
tasks.forEach(task => console.log(`- ${task}`));

console.log(items);

items.forEach((item, index) => {
  item.style.color = `#C${index * 2}${index * 4}${index * 4}${index * 2}D`
});

// Суммирование чисел

const hisNumbers = [10, 20, 30];
let sum = 0;

hisNumbers.forEach(num => sum += num);
console.log(sum);

// Использование forEach с callback

const users = [
  { name: 'Аня', age: 25 },
  { name: 'Борис', age: 30 },
  { name: 'Катя', age: 20 }
]

// Callback-функция

const greetUser = (element, index, array) => {
  console.log(`Привет, ${element.name}! Ты ${index + 1} в списке`);
  // console.log(array.length);
}

users.forEach(greetUser);
