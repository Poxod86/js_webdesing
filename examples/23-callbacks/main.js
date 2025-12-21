function cookSoup(callback) {
  console.log('Ставим воду на плиту...');

  setTimeout(() => {
    console.log('Вода закипела!');
    const vegetables = ['морковь', 'картофель', 'лук'];
    callback(vegetables);
  }, 2000)
}

function addVegetables(veggies) {
  console.log(`Добавляем овощи: ${veggies.join(', ')}.`);
}

cookSoup(addVegetables);

// Практическое задание: Сделаем мини-приложение

const button = document.querySelector('#startButton');
const message = document.querySelector('#message');

function waitAndShow(callback) {
  message.textContent = 'Ждём...';
  setTimeout(() => {
    callback();
  }, 2000);
}

// Callback-функция
function showDone() {
  message.textContent = 'Готово!';
}

button.addEventListener('click', () => {
  waitAndShow(showDone);
});

// Функция для загрузки постов с API

const loadButton = document.getElementById('loadPosts');
const loadOutput = document.getElementById('output');

function getPosts(callback) {
  console.log('Запрашиваем посты...');
  loadOutput.textContent = 'Загружаем...';

  fetch('https://agragregra.github.io/api/data-simple.json')
    .then(response => {
      if (!response.ok) throw new Error(`Ошибка: код ${response.status}`);
      return response.json();
    })
    .then(data => callback(data.posts))
    .catch(error => {
      console.log(error.message);
      loadOutput.textContent = 'Ошибка загрузки!';
    });
}

function showPosts(posts) {
  console.log(`Получено постов: ${posts.length}`);

  if (posts.length === 0) {
    loadOutput.textContent = 'Посты не найдены!';
    return;
  }

  const html = `
    ${posts.map(
      post => `
        <div class="item">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
          <img src="${post.image}" alt="${post.title}">
        </div>
      `
    ).join('')}
  `;

  loadOutput.innerHTML = html;

  posts.forEach(post => {
    console.log(`ID: ${post.id}, Заголовок: ${post.title}, Текст: ${post.body}, Изображение: ${post.image}`);
  });
}

loadButton.addEventListener('click', () => getPosts(showPosts));
