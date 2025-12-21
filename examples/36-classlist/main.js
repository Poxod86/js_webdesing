// Получение classList

const element = document.getElementById('myElement');
console.log(element.classList);

// Методы classList

// 1. Метод добавление класса add()

element.classList.add('class3', 'class4');

console.log(element.classList);

// 2. Метод удаления класса remove()

element.classList.remove('class4');

// 3. Метод переключения классов toggle()

element.classList.toggle('active');

// Переключение с условием

let shouldBeActive = true;
element.classList.toggle('active', shouldBeActive);

// 4. Метод проверки наличия класса contains()

if (element.classList.contains('active')) {
  console.log('Элемент есть!');
}

// 5. Метод замены класса replace()

element.classList.replace('class1', 'class0');

// 6. Метод получения класса по индексу item()

const firstClass = element.classList.item(0);
console.log(firstClass);

// 7. Метод получения строки классов toString()

const classesString = element.classList.toString();
console.log(classesString);

// Свойство length

console.log(element.classList.length);

// Итерация по classList

// Через for...of

for (const className of element.classList) {
  console.log(className);
};

console.log('===');

// Через forEach

element.classList.forEach(className => {
  console.log(className);
});

// querySelectorAll

const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.classList.add('processed');
});
