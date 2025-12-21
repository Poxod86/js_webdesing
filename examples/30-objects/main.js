// Способы создания объектов

// 1. Литерал объекта

let litObj = {
  key1: 'value1',
  key2: 'value2',
}

// 2. Конструктор Object

let constrObj = new Object();
constrObj.key1 = 'value1';

// 3. Object.create()

let createObj = Object.create(null);
createObj.key1 = 'value1';

// Доступ к свойствам

// 1. Через точку

const user = {
  name: 'Алексей',
  age: 35
}

console.log(user.name);
console.log(user.age);

// 2. Через квадратные скобки

console.log(user['name']);

// Добавление и изменение свойств

user.city = 'Москва';
user.isAdmin = true;

console.log(user);

// Удаление свойства

delete user.isAdmin;

console.log(user);

// Методы объектов

let firstUser = {
  name: 'Иван',
  sayHi: function() {
    console.log('Привет!');
  }
}

// Сокращенная запись
let secondUser = {
  name: 'Иван',
  sayHi() {
    console.log('Привет!');
  }
}

firstUser.sayHi();
secondUser.sayHi();

// Ключевое слово this

let thirdUser = {
  name: 'Алексей',
  sayHi() {
    console.log(`Привет, я ${this.name}`);
  }
}

thirdUser.sayHi();

// Проверка существования свойства

// 1. Оператор in

console.log('name' in user);
console.log('city' in user);
console.log('isAdmin' in user);

// 2. Метод hasOwnProperty()

console.log(user.hasOwnProperty('name'));

// Перебор свойств объекта

for (let key in user) {
  console.log(`${key}: ${user[key]}`)
}

// Методы Object.keys(), Object.values(), Object.entries()

// Получаем массив ключей

let keys = Object.keys(user);
let values = Object.values(user);
let entries = Object.entries(user);

console.log(keys);
console.log(values);
console.log(entries);

// Копирование объектов

let fourthUser = { name: 'Иван' };
let admin = fourthUser;
admin.name = 'Пётр';
console.log(fourthUser.name);

// Создание настоящей копии

let clone = Object.assign({}, fourthUser);

// Использование оператора spread

let spreadClone = { ...user };

// Для глубокого копирования

JSON.parse(JSON.stringify(spreadClone));

// Рассмотрим более сложный пример

// 1. Создадим объект библиотека

const library = {
  name: 'Центральная городская библиотека',
  address: 'ул. Ленина, 10',
  books: [],

  // 2. Метод для добавления книги
  addBook(title, author, year, isAvaliable = true) {
    const newBook = {
      id: Date.now().toString().slice(0, 4),
      title,
      author,
      year,
      isAvaliable,
      // 3. Вложенный метод объекта
      getInfo() {
        return `${this.title} (${this.author}, ${this.year}) - ${this.isAvaliable ? 'Доступна' : 'На руках'}`;
      }
    };
    this.books.push(newBook);
    console.log(`Книга: "${title}" добавлена в библиотеку`);
  },

  // 4. Метод для поиска книги по названию
  findBook(title) {
    const foundBook = this.books.find(book =>
      book.title.toLowerCase() === title.toLowerCase()
    );

    if (foundBook) {
      console.log('Найдена книга', foundBook.getInfo());
    } else {
      console.log('Книга не найдена!');
    }

    return foundBook;
  },

  // 5. Метод для выдачи книги читателю
  lendBook(title, readerName) {
    const book = this.findBook(title);

    if (book && book.isAvaliable) {
      book.isAvaliable = false;
      // 6. Динамическое добавление свойства
      book.reader = readerName;
      console.log(`Книга "${title}" выдана читателю ${readerName}`);
    } else if (book && !book.isAvaliable) {
      console.log(`Книга "${title}" уже на руках у ${book.reader}`);
    }
  },

  // 7. Метод для возврата книги
  returnBook(title) {
    const book = this.findBook(title);

    if (book && !book.isAvaliable) {
      book.isAvaliable = true;
      console.log(`Книга "${title}" возвращена. Спасибо, ${book.reader}!`);
      // 8. Удаление временного свойства
      delete book.reader;
    } else {
      console.log('Эта книга не была выдана или не принадлежит нашей библиотеке!');
    }
  },

  // 9. Метод для отображения всех книг
  displayAllBooks() {
    console.log(`${this.name}. Адрес: ${this.address}`);
    console.log('Список книг:');
    // 10. Перебор книг
    this.books.forEach(book => {
      console.log(`${book.id} - ${book.getInfo()}`);
    })
  }
}

// 11. Использование нашей библиотеки

library.addBook('Преступление и наказание', 'Фёдор Достоевский', 1866);
library.addBook('Мастер и Маргарита', 'Михаил Булгаков', 1967);
library.addBook('Всадник без головы', 'Майн Рид', 1865);

// Выводим все книги

library.displayAllBooks();

// Выдаём книгу читателю

library.lendBook('Мастер и Маргарита', 'Иван Иванов');

// Пробуем выдать ту же книгу другому читателю

library.lendBook('Мастер и Маргарита', 'Пётр Петров');

// Возвращаем книгу

library.returnBook('Мастер и Маргарита');

// Проверяем статус книг

library.displayAllBooks();

// 12. Дополнительные операции с объектами

// Проверка существования свойства
console.log('Есть ли адрес у библиотеки?', 'address' in library ? 'ЕСТЬ!' : 'НЕТ!');

// Получить все ключи объекта
const firstBook = library.books[0];
console.log(`Ключи первой книги: ${Object.keys(firstBook)}`);

// Копируем объект книги (поверхностное копирование)
const bookCopy = { ...firstBook }
console.log(`Копия книги: ${bookCopy.getInfo()}`);

// Динамическое добавление свойства в библиотеку
library.workingHours = '9:00 - 20:00';
console.log(`Часы работы: ${library.workingHours}`);
