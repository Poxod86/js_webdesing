// условие ? кодЕслиTrue : кодЕслиFalse

let age = 23;
let message = age >= 18 ? 'Ты совершеннолетний' : 'Ты несовершеннолетний';

if (age >= 18) {
  message = 'Ты совершеннолетний';
} else {
  message = 'Ты несовершеннолетний';
}
console.log(message);

let time = 16;
let noonStatus = time < 12 ? '🕙 Время до обеда' : '🕑 Время после обеда';
console.log(noonStatus);

let orderAmount = 120,
    discount = 10;

let finalSum = orderAmount - (orderAmount / 100 * discount);

let discountStatus = orderAmount >= 100
                    ? `🎁 Вам доступна скидка ${discount}%\n✨ Финальная сумма ${finalSum} руб.`
                    : `🔴 Вам не доступна скидка!\n✨ Финальная сумма: ${orderAmount} руб.`;
console.log(discountStatus);

// Вложенные тернарники и цепочки

const number = 0;
const checkNumber = number > 0
                    ? 'Положительное'
                    : number == 0
                      ? 'Ноль'
                      : 'Отрицательное';
console.log(checkNumber);

// Цепочка тернарников

const accessAge = 24;
const accessStatus = accessAge < 13 ? 'Детский доступ' :
                     accessAge < 18 ? 'Подростковый доступ' :
                     accessAge < 65 ? 'Взрослый доступ' :
                     'Пенсионный доступ';
console.log(accessStatus);

// То же самое, что:
let access;
if (age < 13) {
  access = "Детский доступ";
} else if (age < 18) {
  access = "Подростковый доступ";
} else if (age < 65) {
  access = "Взрослый доступ";
} else {
  access = "Пенсионный доступ";
}
