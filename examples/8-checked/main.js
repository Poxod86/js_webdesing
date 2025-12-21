const myCheckbox = document.getElementById('myCheckbox');
const sberBtn = document.getElementById('sberBtn');
const yooKassaBtn = document.getElementById('yooKassaBtn');
const yooMoneyBtn = document.getElementById('yooMoneyBtn');
const mySubmit = document.getElementById('mySubmit');
const checkResult = document.getElementById('checkResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit.onclick = () => {
  if (myCheckbox.checked) {
    checkResult.textContent = `😊 Чекбокс отмечен!`;
  } else {
    checkResult.textContent = `🤔 Чекбокс НЕ отмечен!`;
  }

  if (sberBtn.checked) {
    paymentResult.textContent = `🟢 Вы выбрали оплату Сбер`;
  } else if (yooKassaBtn.checked) {
    paymentResult.textContent = `🟢 Вы выбрали оплату ЮKassa`;
  } else if (yooMoneyBtn.checked) {
    paymentResult.textContent = `🟢 Вы выбрали оплату ЮMoney`;
  } else {
    paymentResult.textContent = `❌ Способ оплаты не выбран!`;
  }
}
