const food1 = '🥔 Картофель';
const food2 = '🥕 Морковь';
const food3 = '🌽 Кукуруза';

function allFoods(...foods) {
  console.log(foods);
  console.log(...foods);
  // console.log(food1, food2, food3);
}

allFoods(food1, food2, food3);

console.log('===');

function getFood(...foods) {
  return foods;
}

const foods = getFood(food1, food2, food3);

console.log(foods);

console.log('===');

function showFoods(...foods) {
  console.log(foods);
}

showFoods('Яблоко', 'Банан', 'Апельсин');

// При деструктуризации

const fruits = ['Яблоко', 'Банан', 'Апельсин', 'Киви'];

const [first, second, ...others] = fruits;

console.log(first);
console.log(second);
console.log(others); // Массив
console.log(...others); // Отдельные элементы

//

function sum(...numbers) {
  let result = 0;

  for (let number of numbers) {
    result += number;
  }

  return result;
}

const total = sum(1, 2, 3);

console.log(`Сумма: ${total}`);

// 

const combineStrings = (...strings) => {
  return strings.join(' ');
}

const strings = combineStrings('☀️', 'прекрасен', 'летний', 'юг');

console.log(strings);
