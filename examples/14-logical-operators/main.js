// 1. Логическое И (&&)

const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log('🟢 Можно водить машину');
} else {
  console.log('🔴 Нельзя водить машину');
}

// 2. Логическое ИЛИ (||)

const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
  console.log('🟢 Можно отдыхать');
} else {
  console.log('🔴 Идём на работу');
}

// 3. Логическое НЕ (!)

const isLogged = false;

if (!isLogged) {
  console.log('❌ Необходимо войти!');
} else {
  console.log('🟢 Добро пожаловать!');
}

// Ленивые вычисления

// && - если первый false, второй не выполняется
false && console.log('Это не выведется');

// || - если первый true, второй не выполнится
true || console.log('Это тоже не выведется');

// Комбинирование операторов

const isWoman = false;
const youAge = 20;
const hasMoney = true;

if (youAge >= 18 && hasMoney && !isWoman) {
  console.log('🟢 Можно жениться');
} else {
  console.log('🔴 Нельзя жениться');
}
