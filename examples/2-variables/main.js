let x = 10;

if (true) {
  let x = 20;
  console.log(x);
}

console.log(x);

const y = 30;

const obj = { name: 'Алиса' };

console.log(obj.name);

obj.name = 'Александр';

console.log(obj.name);

const arr = [1, 2, 3];

console.log(arr);

arr.push(4);

console.log(arr);

let a;
const b = 10;

let c;
c = 5;

const d = 10;

if (true) {
  let blockVar = 'Я в блоке!';
  console.log(blockVar);
}

let globalVar = 'Я - глобальная переменная!';
function foo() {
  console.log(globalVar);
}
foo();

function myFunction() {
  // 'use strict';
  e = 20;
}
myFunction();

let f = 100;
if (true) {
  let f = 200;
  console.log(f);
}
console.log(f);

const person = { userName: 'Алиса', userAge: 25 }

const { userName, userAge } = person;

console.log(userName);
console.log(userAge);

const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(third);

let personName = 'Елена';
let personAge = 25;
let isStudent = true;
let personData = { name: 'Alice', personAge: 25 };

console.log(
  'Тип personName: ' + typeof personName,
  '\nТип personAge: ' + typeof personAge,
  '\nТип isStudent: ' + typeof isStudent,
  '\nТип personData: ' + typeof personData
);

console.log(`
Тип personName: ${typeof personName}
Тип personAge: ${typeof personAge}
Тип isStudent: ${typeof isStudent}
Тип personData: ${typeof personData}
`);

const PI = 3.14;
let radius = 5;
let area = PI * radius * radius;
console.log(area);

// Финальный пример для закрепления

const user = { name: 'Евгений', age: 30, profession: 'Электрик' };

const { name: peopleName, age: peopleAge, profession: peopleProfession } = user;

console.log(`Имя: ${peopleName}`);
console.log(`Возраст: ${peopleAge}`);
console.log(`Профессия: ${peopleProfession}`);

document.getElementById('p1').textContent = `Имя: ${peopleName}`;
document.getElementById('p2').textContent = `Возраст: ${peopleAge}`;
document.getElementById('p3').textContent = `Профессия: ${peopleProfession}`;

document.getElementById('all').innerHTML += `
  <p>Имя: ${peopleName}</p>
  <p>Возраст: ${peopleAge}</p>
  <p>Профессия: ${peopleProfession}</p>
`;

if (true) {
  let localVar = 'Я - локальная переменная';
  console.log(localVar);
}
