// Фильтрация чисел

const numbers = [5, 12, 8, 130, 44];
const bigNumbers = numbers.filter(num => num > 10);
console.log(bigNumbers);

// Фильтрация строк

const words = ['кот', 'собака', 'мышь', 'слон'];
const longWords = words.filter(word => word.length > 3);
console.log(longWords);

// Фильтрация объектов

const peoples = [
  { name: 'Алексей', age: 35 },
  { name: 'Мария', age: 20 },
  { name: 'Иван', age: 18 },
  { name: 'Анна', age: 25 }
]

// const items = peoples.filter(person => person.age > 18);

const items = peoples.filter(
  function(person) {
    return person.age > 18;
  }
);

items.forEach(item => console.log(item));

// Использование индекса

const myNumbers = [10, 20, 30, 40, 50];

const evenIndex = myNumbers.filter((_, index) => index % 2);

console.log(evenIndex);
