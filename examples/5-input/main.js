const root = document.getElementById('root');

const createPrompt = (rootElement) => {
  let userName = window.prompt("Ваше имя:", "Ян");
  const resultMessage = document.createElement('p');

  if (userName !== null) {
    resultMessage.textContent = `✅ Ваше имя: ${userName}`;
  } else {
    resultMessage.textContent = `❌ Вы отменили ввод!`
  }

  rootElement.appendChild(resultMessage);
}

// createPrompt(root);

const form = document.querySelector('#userForm');
const formReset = document.querySelector('#reset');
const formResult = document.getElementById('result');
const headingName = document.querySelector('h2 span');

const formSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const name = formData.get('name');


  if (!name) {
    alert('❌ Введите имя!');
    return;
  }

  const newParagraph = document.createElement('p');

  newParagraph.textContent = `✅ Имя добавлено: ${name}`;
  formResult.prepend(newParagraph);

  headingName.textContent = ` (${name})`;

  e.target.reset();

  console.log(`✅ Имя добавлено: ${name}`);
}

const appReset = () => {
  formResult.textContent = '';
  headingName.textContent = '';

  console.clear();
  console.log('🧹 Консоль очищена');
}

form.addEventListener('submit', formSubmit);
formReset.addEventListener('click', appReset);
