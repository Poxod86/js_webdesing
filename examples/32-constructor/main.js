// 1. Функции-конструкторы

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
  }
}

const person1 = new Person('Анна', 25);
person1.greet();

// 2. Конструкторы в классах

class SecondPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
  }
}

const person2 = new SecondPerson('Иван', 30);
person2.greet();

// 

function User(name, age) {
  this.name = name;
  this.age = age;
}

const newUser = new User('Алекс', 35);
console.log(newUser);

// 

// const user1 = { name: 'Алекс', age: 35 };
// const user2 = { name: 'Мария', age: 20 };
// const user3 = { name: 'Иван', age: 25 };

function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User('Алексей', 35);
const user2 = new User('Мария', 20);
const user3 = new User('Иван', 25);

// Можно ли добавлять методы в конструктор?

function ProtoUser(name) {
  this.name = name;
}

ProtoUser.prototype.sayHi = function() {
  console.log(`Привет, я ${this.name}`);
}

const user = new ProtoUser('Алекс');
user.sayHi();

// 1. Пример "Конструктор товара" (классический подход)

function Product(name, price) {
  this.name = name;
  this.price = price;

  this.displayInfo = () => {
    return `Товар: ${this.name}, цена ${this.price} руб.`;
  }
}

const iPhone = new Product('iPhone', '750 000');

console.log(`Товар: ${iPhone.name}, Цена: ${iPhone.price} руб.`);

console.log(iPhone.displayInfo());

// 2. Пример "Конструктор машины" (современный подход)

class Car {
  constructor(model, speed, price) {
    this.model = model;
    this.speed = speed;
    this.price = price;
  }

  displayInfo() {
    return `Автомобиль: ${this.model}, Скорость: ${this.speed} км/ч, Цена: ${this.price} руб.`;
  }
}

const bmw = new Car('BMW X', 250, '80 000 000');

console.log(bmw.displayInfo());
