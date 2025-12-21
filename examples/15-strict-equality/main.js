// 1. Строгое сравнение

console.log(5 === 5);
console.log(5 === '5');
console.log(true === 1);
console.log(null === undefined);

// 2. Нестрогое сравнение

console.log(5 == 5);
console.log(5 == '5');
console.log(1 == true);
console.log('1' == true);
console.log(null == undefined);

// Разбор сложных случаев

// 1. null и undefined

console.log(null === undefined);
console.log(null == undefined);

// 2. NaN (Not a Number)

console.log(NaN === NaN);
console.log(isNaN('NaN'));
console.log(Number.isNaN(NaN));

// 3. 0 и false

console.log(0 == false);
console.log(0 === false);

// 4. Пустые строки и false

console.log('' == false);
console.log('' === false);

// 

console.log(isNaN('123'));
console.log(isNaN('Привет'));
console.log(Number.isNaN('Привет'));

// Сравнение объектов и массивов

const obj1 = { a: 1 };
const obj2 = { a: 1 };

console.log(obj1 === obj2);
console.log(obj1 == obj2);

const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2);

// Операторы неравенства

// 1. Нестрогое неравенство (!=)

console.log(5 != '5');
console.log(1 != true);
console.log(null != undefined);
console.log('Привет' != 0);

// 2. Строгое неравенство (!==)

console.log(5 !== '5');
console.log(1 !== true);
console.log(null !== undefined);
console.log('Привет' !== 0);

// Практический пример

const userInput = '123';

if (userInput != 123) {
  console.log('Нестрогое сравнение: значения могут быть разными');
}

if (userInput !== 123) {
  console.log('Строгое сравнение: точно разные тип и значение');
}

const PI = 3.14;

if (PI == '3.14') {
  console.log('Истина');
} else {
  console.log('Ложь');
}
