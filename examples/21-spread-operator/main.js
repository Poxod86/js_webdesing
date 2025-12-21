let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);
// let maximum = Math.max(1, 2, 3, 4, 5);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

// 

let movieName = 'Восход';

let letters = [...movieName].join('.');

console.log(letters);

// 

let fruits = ['🍐 Груша', '🍍 Ананас', '🍌 Банан'];
console.log(fruits);

let newFruits = [...fruits];
console.log(newFruits);

let vegetables = ['🌽 Кукуруза', '🥔 Картофель', '🥕 Морковь'];

// Создаём новый массив foods

let foods = [...fruits, ...vegetables, '🥚 Яйца', '🥒 Огурцы'];

console.log(foods.join('\n'));
