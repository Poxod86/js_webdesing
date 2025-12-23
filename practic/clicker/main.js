let count = document.querySelector('.display-value');

const actions = {
    increase() { count.textContent++ },
    decrease() { count.textContent -= count.textContent > 0 },
    cleare() { (count.textContent = 0) }
}

document.querySelector('.counter-panel').addEventListener('click', ({ target }) => {
    actions[target.classList[0]]?.();
});