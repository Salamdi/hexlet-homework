/*
реализовать функцию, которая принимает массив постов с названием и телом поста
и возвращает массив с сокращенными названием (первые 20 символов и многоточие)
и телом (первые 40 символов и многоточие)
[
  ['sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'],
  ['ea molestias quasi exercitationem repellat qui ipsa sit aut',
  'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut'],
  ...
] -> [
  ['sunt aut facere repe...',
  'quia et suscipit suscipit recusandae con...'],
  ['ea molestias quasi e...',
  'et iusto sed quo iure voluptatem occaeca...'],
  ...
]
*/

const trimPostsContent = (posts) => {
  // start
  for (const post of posts) {
    post[0] = `${post[0].substring(0, 20)}...`;
    post[1] = `${post[1].substring(0, 40)}...`;
  }
  return posts;

  // end
};

const renderPosts = (posts) => {
  const list = document.body.querySelector('.list-group');
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const todo = `
          <li href="#" class="list-group-item list-group-item-action">
            <div class="ms-2 me-auto">
              <div class="fw-bold">${post[0]}</div>
              ${post[1]}
            </div>
          </li>`;
    list.insertAdjacentHTML('beforeend', todo);
  }
};

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((posts) => posts.map((post) => [post.title, post.body]))
  .then(trimPostsContent)
  .then(renderPosts);
