// 1. Явное преобразование

// 1.1 Преобразование в строку
console.log(typeof String(123));
console.log(typeof String(true));
console.log(String(null));
console.log(String(undefined));
console.log(String([1, 2, 3]));

// 1.2 Преобразование в число
console.log(typeof Number('123'));
console.log(Number('abc'));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

// 1.3 Преобразование в булево
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean('Hello'));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));
console.log(Boolean({}));

// 2. Неявное преобразование

// 2.1 (+) Преобразование в строку
console.log(('5' + 2));
console.log('10' + true);
console.log('Hello' + null);

// 2.2 (- * /) - Преобразование в число
console.log('10' - 2);
console.log('5' * 2);
console.log('10' / 2);
console.log('abc' / 2);

// 2.3 (&& || !) Логические операции
// Используют булевые значения
console.log(0 || 'Привет');
console.log(1 && 'Мир');
console.log(!'');

// 2.4 (== и ===) Сравнение типов
console.log(5 == '5');
console.log(5 === '5');
console.log(null == undefined);
console.log(null === undefined);

// Выводим типы
let x = 'Владимир',
    y = 15,
    z = true;

console.log(`
  x (${x}): ${typeof x}
  y (${y}): ${typeof y}
  z (${z}): ${typeof z}
`);

// Практический пример

const form = document.querySelector('#userForm');
const formResult = document.querySelector('#result');

const formSubmit = (e) => {
  e.preventDefault();

  let getValue = new FormData(e.target).get('value').trim();

  if (!getValue) {
    alert('❌ Введите значение!');
    return;
  }

  const parseValue = (value) =>
    value === 'true' ? { value: true, type: 'boolean' } :
    value === 'false' ? { value: false, type: 'boolean' } :
    !isNaN(value) ? { value: Number(value), type: 'number' } :
    { value, type: 'string' };

  const { value, type } = parseValue(getValue);

  const resultParagraph = document.createElement('p');
  resultParagraph.innerHTML = `
  ✅ Значение: <span class="conversion-value">${value}</span> | Тип: <span class="conversion-type">${type}</span>
  `;

  formResult.prepend(resultParagraph);

  e.target.reset();
}

form.addEventListener('submit', formSubmit);
