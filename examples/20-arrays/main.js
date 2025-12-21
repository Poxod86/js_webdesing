let fruit = '🍎 Яблоко';

let fruits = ['🥝 Киви', '🥥 Кокос', '🍌 Банан'];

console.log(fruit);

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log('===');

fruits[2] = '🍍 Ананас';
console.log(fruits);

console.log(`Длина массива: ${fruits.length}`);

// Добавление в конец

fruits.push('🍌 Банан');
// fruits.pop(); // Удаление с конца

// Добавление в начало
fruits.unshift('🍐 Груша');


// Удаление с начала
fruits.shift();

console.log(fruits);


// Определение индекса

let index = fruits.indexOf('🍌 Банан');
console.log(`Индекс банана: ${index}`);
console.log(`Длина массива: ${fruits.length}`);

// Вывод forEach

fruits.forEach(e => console.log(e));

fruits.forEach((e, i) => console.log(`${i + 1}. ${e}`));

console.log('===');

// Выведем нечётные

fruits.forEach((e, i) => {
  if (i % 2 === 0) {
    console.log(`${i + 1}. ${e}`);
  }
})

console.log('===');

// Выведем чётные

fruits.forEach((e, i) => {
  if (i % 2 !== 0) {
    console.log(`${i + 1}. ${e}`);
  }
})

console.log('===');

// reverse() - изменяет исходный массив

fruits.reverse().forEach((e, i) => {
  console.log(`${i + 1}. ${e}`);
})

console.log('===');

// Без reverse()

fruits.forEach((e, i) => {
  const reverseIndex = fruits.length - 1 - i;
  console.log(`${reverseIndex + 1}. ${fruits[reverseIndex]}`)
})

console.log('===');

// Классический способ for...of

for (let fruit of fruits) {
  console.log(fruit);
}

console.log('===');

// Как решить проблему с индексом в for

console.log(fruits.entries());

for (const [i, e] of fruits.entries()) {
  console.log(`${i + 1}. ${e}`);
}

console.log('===');

// Сортировка

let newFruits = ['Киви', 'Яблоко', 'Кокос', 'Банан'];

// Сортировка по алфавиту
newFruits.sort();
newFruits.sort().reverse();

newFruits.forEach((e, i) => console.log(i, e));
