let min = 50,
    max = 100;

const randomNumber = Math.floor(Math.random() * (max - min + 1));

console.log(randomNumber);

let form = document.querySelector('.generator-form'),
    minInput = form.querySelector('.generator-min'),
    maxInput = form.querySelector('.generator-max'),
    display = form.querySelector('.display-value');

form.addEventListener('click', (event) => {
  event.preventDefault();

  const actions = {
    submit() {
      let min = +minInput.value,
          max = +maxInput.value;

      if (min >= max) return alert("Минимальное значение должно быть меньше максимального!");

      display.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
    },
    reset() {
      minInput.value = minInput.defaultValue;
      maxInput.value = maxInput.defaultValue;
      display.textContent = '0';
    }
  }

  actions[event.target.type]?.();
});
