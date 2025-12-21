// Классическая функция

function sumDec(a, b) {
  return a + b;
}

// Функциональное выражение

const sumExp = function(a, b) {
  return a + b;
}

const hello = function() {
  console.log('Привет!');
}

hello();

// Используем как callback

setTimeout(hello, 2000);

setTimeout(function() {
  console.log('Привет!');
}, 3000)

// 

const numbers = [1, 2, 3, 4, 5, 6];
const square = (e) => Math.pow(e, 2);
const squares = numbers.map(square);

console.log(squares);
