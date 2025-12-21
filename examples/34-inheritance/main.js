// 1. Создание родительского класса

class Animal {
  alive = true;

  eat() {
    console.log(`${this.name} ест.`);
  }
  sleep() {
    console.log(`${this.name} спит.`);
  }
}

// 2. Создание дочернего класса

class Rabbit extends Animal {
  name = 'Кролик';

  jump() {
    console.log(`${this.name} прыгает!`);
  }
}

class Bear extends Animal {
  name = 'Медведь';
}

const rabbit = new Rabbit();
const bear = new Bear();

console.log(rabbit);
console.log(rabbit.alive);

rabbit.alive = false;

console.log(rabbit.alive);

bear.eat();
bear.sleep();

rabbit.jump();
// bear.jump();
