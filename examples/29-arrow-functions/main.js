
// Обычная функция

// function sayHello(name) {
//   return `Привет, ${name}`;
// }

// Стрелочная функция

const sayHello = (name) => {
  return `Привет, ${name}`;
}

console.log(sayHello('Михаил'));

// Основной синтаксис

const имяФункции = (параметр) => {
  return `Привет, ${параметр}`;
}

console.log(имяФункции('Александр'));

// Отличие от обычной функции

const person = {
  name: 'Алексей',
  // greet: function() {  },
  greet() {
    setTimeout(function() {
      console.log(`Привет, ${this.name}`);
    }, 100);

    setTimeout(() => {
      console.log(`Привет, ${this.name}`);
    }, 100);
  }
}

person.greet();
