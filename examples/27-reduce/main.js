const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// Пример без начального значения

const myNumbers = [1, 2, 3, 4];
const mySum = myNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}); // 👈 Здеcь не указываем начальное значение для reduce()

console.log(mySum);

// Поиск максимального числа

const yourNumbers = [1, 5, 2, 8, 3];
const yourMax = yourNumbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
}, -Infinity);
console.log(yourMax);

// Объединение строк

const words = ['Привет ', 'мир', '!'];
const sentence = words.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sentence);

// Создание объекта

const hisNumbers = [1, 2, 2, 3, 1];
const count = hisNumbers.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;

  return accumulator;
}, {});

console.log(count);

// Сглаживание массива (flatten)

const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flatArray = nestedArray.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, [])

console.log(flatArray);
