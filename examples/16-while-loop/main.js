// while (условие) {
//   // Код, который выполняется, пока условие истинно
// }

let counter = 1;

while (counter <= 5) {
  console.log(`Итерация номер: ${counter}`);
  counter++;
}

console.log('Цикл завершён!');

// Практические примеры

// 1. Обратный отсчёт

let countdown = 5;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}

console.log('Поехали!');

// 2. Сумма чисел

let sum = 0;
let number = 1;
let maxNumber = 10;

while (number <= maxNumber) {
  sum += number;
  number++;
}

console.log(`Сумма чисел от 1 до ${maxNumber}: ${sum}`);

// Большой финальный пример

function startProcessing() {
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');

  const items = [...Array(21).keys()].slice(1);
  let processed = 0;
  const total = items.length;

  function processBatch() {
    const batchSize = 1;
    let count = 0;

    while (count < batchSize && processed < total) {
      const item = items[processed];
      try {
        processItem(item);
        processed++;
        count++;

        const percent = Math.round((processed / total) * 100);
        progressBar.value = percent;
        progressText.textContent = `${percent}%`;
      } catch (error) {
        console.log(`Ошибка при обработке элемента ${item}: ${error}`);
        processed++;
      }
    }

    if (processed < total) {
      setTimeout(processBatch, 50);
    } else {
      document.getElementById('result').textContent = `✅ Обработка завершена!`;
    }
  }

  processBatch();
}

async function processItem(item) {
  await new Promise(resolve => setTimeout(resolve, 50));
  console.log(`Обработан элемент ${item}`);
}

// Пример с do while

// do {
//   number = prompt('Введите положительное число:');
// } while (number <= 0 || isNaN(number));

// alert(`Вы ввели положительное число: ${number}`);

// do {
//   // Выполнится хотя бы одни раз
// } while (condition);
