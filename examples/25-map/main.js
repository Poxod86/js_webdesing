// Синтаксис

const array = [1, 2, 3];

const thisArg = { offset: 1 };

// Неправильный вариант:

// const callback = (element, index, array) => {
//   return element + index + array.length + this.offset;
// }

// this можно получить только в function()

const callback = function(element, index, array) {
  return element + index + array.length + this.offset;
}

const result = array.map(callback, thisArg);
console.log(result.join(', '));

// Функция для обработки чисел

const myNumbers = [1, 2, 3];

const asyncDouble = num => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(num * 2), 1000);
  })
}

async function processMyNumbers() {
  const promises = myNumbers.map(asyncDouble);
  const results = await Promise.all(promises);

  console.log(results);
}

processMyNumbers();

// Оценка студентов

const scores = [85, 92, 78, 95];

const gradingSystem = {
  bonusPoints: 5,
  maxScore: 100
}

const report = scores.map(function(score, index, array) {
  const adjustedScore = score + this.bonusPoints;
  const finalScore = Math.min(adjustedScore, this.maxScore);
  const averageScore = array.reduce((sum, s) => sum + s, 0) / array.length;
  const isAboveAverage = finalScore > averageScore ? ' (выше среднего)' : '';

  return `Студент ${index + 1}: ${finalScore}${isAboveAverage}`;
}, gradingSystem);

report.forEach(line => console.log(line));

// 

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(e) {
  return Math.pow(e, 2);
}
function cube(e) {
  return Math.pow(e, 3);
}

// 

const students = ['Алиса', 'Сергей', 'Алексей'];

const upperCase = (e) => e.toUpperCase();
const lowerCase = (e) => e.toLowerCase();

const studentsUpperCase = students.map(upperCase);
const studentsLowerCase = students.map(lowerCase);

console.log(studentsUpperCase);
console.log(studentsLowerCase);

// Список дел с приоритетами

const tasks = [
  { text: 'Купить продукты', isImportant: false },
  { text: 'Написать код', isImportant: true },
  { text: 'Позвонить другу', isImportant: false },
  { text: 'Сходить в спортзал', isImportant: true }
]

const taskList = tasks.map((element, index) => {
  const priority = element.isImportant ? ' (важная)' : '';

  return `${index + 1}. ${element.text}${priority}`
})

taskList.forEach(task => console.log(task));
