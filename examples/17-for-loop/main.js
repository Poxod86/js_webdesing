// Базовый синтаксис for

// for (инициализация; условие; завершающее выражение) {
//   // тело цикла (код, который выполняется на каждой итерации)
// }

// Пример 1: Перебор массива

const fruits = ['яблоко', 'банан', 'апельсин'];

for (
  let i = 0;
  i < fruits.length;
  i++
) {
  console.log(fruits[i]);
}

console.log(fruits.length);
console.log(`- ${fruits[0]}`);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Чётко известно, что у нас 5 итераций

for (let i = 0; i < 5; i++) {
  console.log(`Итерация: ${i + 1}`);
}

// Пример: Чтение до маркера конца

const stream = [2, 4, 6, 8, null, 10, 12];
let i = 0;

console.log(stream);

while (stream[i] !== null) {
  console.log(stream[i]);
  i++;
}

// Пример: Повтор до успешного ответа

function sendRequest() {
  return Math.random() > .8; // Вероятность true 20%
}

let attempt = 0;
let success = false;

while (!success && attempt < 10) {
  success = sendRequest();
  attempt++;
  console.log(`Попытка ${attempt}: ${success ? 'Успех' : 'Повторяем...'}`);
}

if (success) {
  console.log(`Успешно завершено. Попыток: ${attempt}`);
} else {
  console.log('Не удалось после 10 попыток');
}

// Переходим к for

for (let i = 10; i > 0; i-=2) {
  if (i == 6) {
    break;
  } else {
    console.log(i);
  }
}
