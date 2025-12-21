class Car {
  static totalCars = 0;

  constructor(model) {
    this.model = model;
    Car.totalCars++;
  }

  drive() {
    console.log(`${this.model} едет!`);
  }

  static createRandomCar() {
    const models = ['BMW', 'Audi', 'Toyota'];
    const randomModel = models[Math.floor(Math.random() * models.length )];
    return new Car(randomModel);
  }

  // Неправильно!
  // static printModel() {
  //   console.log(this.model);
  // }
}

const bmw = new Car('BMW');
const audi = new Car('Audi');
const randomCar = Car.createRandomCar();

bmw.drive();
audi.drive();
randomCar.drive();

console.log(Car.totalCars);

Car.createRandomCar();

// bmw.printModel(); // Неправильно!
