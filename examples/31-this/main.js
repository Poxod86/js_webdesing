// 1. Глобальный контекст

console.log(this);
console.log(this.cookieStore);

// 2. В простой функции

function showThis() {
  // 'use strict';
  console.log(this);
}

showThis();

// 3. В методах объекта

const user = {
  name: 'Алексей',
  greet() {
    console.log(`Привет, меня зовут ${this.name}`);
  }
}

user.greet();

// 4. В конструкторах с new

function User(name) {
  this.name = name;
}

const alex = new User('Алексей');
console.log(alex.name);

// 5. В обработчиках событий

const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log(this.getAttribute('id'));
});

// Стрелочные функции

const obj = {
  name: 'Евгений',
  // greet: () => { // Получим undefined
  greet() {
    console.log(this.name);
  }
}

obj.greet();
