let a = 5;
let b = 3;
let result = a + b;

let sum = a + b;

let summa = 5 + 3;
let text = "Привет " + "Мир";
console.log(text);

let difference = 10 - 4;
console.log(difference);

let product = 7 * 2;
console.log(product);

let quotient = 20 / 5;
console.log(quotient);

let remainder = 10 % 3;
console.log(remainder);

let power = 2 ** 3;
console.log(power);

let inc = 5;
inc++;
console.log(inc);

let dec = 5;
dec--;
console.log(dec);

let num1 = 10;
let negNum = -num1;
console.log(negNum);

let str = '123';
let num2 = +str;
console.log(typeof str, typeof num2)

let x;
x = 10;
console.log(x);
x = 20;
console.log(x);

let num3 = 5;
num3 += 4;
console.log(num3);

let txt = 'Это текст.';
console.log(txt);
txt += ' Привет!';
console.log(txt);

document.querySelector('.text-block').innerHTML += `
  <p>Третий блок текста.</p>
  <small>Заключение.</small>
`

let y = 10;
y -= 4;
console.log(y);

let c = 7;
c *= 2;
console.log(c);

let d = 20;
d /= 5;
console.log(d);

let e = 10;
e %= 3;
console.log(e);

let f = 2;
f **= 3;
console.log(f);

let g = 10;
let h = 3;

console.log(g + h);
console.log(g - h);
console.log(g * h);
console.log(g / h);
console.log(g % h);
console.log(g ** h);

console.log(g += 5);
console.log(g -= 2);
console.log(g *= 2);
console.log(g /= 2);
console.log(g %= 2);
g = 10;
console.log(g **= 2);

let sqrt = Math.sqrt(16);
console.log(sqrt);

const PI = Math.PI;
console.log(PI);

let random = Math.random();
console.log(random);

let firstResult = 10 + 5 * 2;
let resultWithBrackets = (10 + 5) * 2;

console.log(`
  firstResult: ${firstResult}
  resultWithBrackets: ${resultWithBrackets}
`);

console.log(5 == '5');
console.log(5 != '5');

console.log(5 === '5');
console.log(5 === 5);

console.log(5 !== 5);
console.log(5 !== '5');

console.log(10 > 5);

console.log(10 <= 10);
console.log(10 >= 5);

console.log(true && false);

console.log(true || false);

console.log(!true)

let age = 18;
let peopleStatus = age >= 18 ? 'Взрослый' : 'Ребенок';
console.log(peopleStatus);

let value = null;
let finalResult = value ?? 'Значение по умолчанию';
console.log(finalResult);

let user = { name: 'Алексей', age: '30' };
console.log(user.age?.toString());

let k = 0;
k ||= 10;
console.log(`Оператор ||= ${k}`);

let l = 5;
l &&= 10;
console.log(`Оператор &&= ${l}`);

let m = null;
m ??= 10;
console.log(`Оператор ??= ${m}`);

console.log(typeof 42);
console.log(typeof 'Привет');
console.log(typeof true);

class User {};
let people = new User();
console.log(people instanceof User);

console.log(void 42);

let j = (1, 2, 3);
console.log(j);

let labor = { name: 'Александр', age: 30 };
console.log('age' in labor);

let worker = { name: 'Степан' };
delete worker.name;
console.log(worker);

class Workman {};
let workman = new Workman();
console.log(workman);

let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5, 6];
console.log(numbers);
console.log(newNumbers);

function sumFunction(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}
console.log(sumFunction(1, 2, 3));
console.log(sumFunction(1, 2, 3, 4, 5));

async function fetchData() {
  let response = await fetch('data.json');
  let data = await response.json();
  console.log(data.employees[1].lastName);
}
fetchData();

async function fetchDataHTML() {
  try {
    let response = await fetch('data.json');

    if (!response.ok) {
      throw new Error(`Ошибка загрузки данных: ${responce.statusText}`);
    }

    let data = await response.json();

    let outputElement = document.getElementById('root');

    data.employees.forEach(employee => {
      let employeeElement = document.createElement('p');
      employeeElement.textContent = `Сотрудник: ${employee.firstName} ${employee.lastName}`;
      outputElement.appendChild(employeeElement);
    })
  } catch (error) {
    console.error('❌ Ошибка при загрузке данных:', error);
  }
}
fetchDataHTML();
