// const dayNumber = 3;
// let dayName;

// if (dayNumber === 1) {
//   dayName = "Понедельник";
// } else if (dayNumber === 2) {
//   dayName = "Вторник";
// } else if (dayNumber === 3) {
//   dayName = "Среда";
// } else if (dayNumber === 4) {
//   dayName = "Четверг";
// } else if (dayNumber === 5) {
//   dayName = "Пятница";
// } else if (dayNumber === 6) {
//   dayName = "Суббота";
// } else if (dayNumber === 7) {
//   dayName = "Воскресенье";
// } else {
//   dayName = "Ошибка: дня с таким номером нет";
// }

// console.log(dayName);

let dayNumber = 8;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = 'Понедельник';
    break;
  case 2:
    dayName = 'Вторник';
    break;
  case 3:
    dayName = 'Среда';
    break;
  case 4:
    dayName = 'Четверг';
    break;
  case 5:
    dayName = 'Пятница';
    break;
  case 6:
    dayName = 'Суббота';
    break;
  case 7:
    dayName = 'Воскресенье';
    break;
  default:
    dayName = `Ошибка: дня с таким номером (${dayNumber}) нет`;
}

console.log(dayName);

// Через объект

const weekDays = {
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
  7: 'Воскресенье'
}

const weekDay = weekDays[dayNumber] || `Ошибка: дня с таким номером (${dayNumber}) нет`;

console.log(weekDay);
