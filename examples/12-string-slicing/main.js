const fullName = 'WebDesign Master';

let firstName = fullName.slice(0, 9);
// let lastName = fullName.slice(10, 16);
let lastName = fullName.slice(10);

console.log(firstName);
console.log(lastName);

let firstCharacter = fullName.slice(0, 1);
let lastCharacter = fullName.slice(-1);

console.log(firstCharacter);
console.log(lastCharacter);

// Разделение строки по пробелу

const fullName2 = 'WebDev Master';

console.log(fullName2.slice(0, fullName2.indexOf(' ')));
console.log(fullName2.slice(fullName2.indexOf(' ') + 1));

// Разделение E-mail на имя пользователя и домен

const email = 'courses@webdesign-master.ru';

let firstHalf = email.slice(0, email.indexOf('@'));
let lastHalf = email.slice(email.indexOf('@') + 1);

console.log(firstHalf);
console.log(lastHalf);

const parts = email.split('@');

if (email.includes('@')) {
  console.log(parts);
  console.log(parts[0]);
  console.log(parts[1]);
}
