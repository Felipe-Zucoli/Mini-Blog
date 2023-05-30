const postsContainer = document.getElementById('posts');

// Array com alguns posts
const posts = [
  {
    title: 'Título do Post 1',
    content: 'Conteúdo do Post 1'
  },
  {
    title: 'Título do Post 2',
    content: 'Conteúdo do Post 2'
  },
  {
    title: 'Título do Post 3',
    content: 'Conteúdo do Post 3'
  }
];

// Função para exibir os posts na página
function displayPosts() {
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);

    postsContainer.appendChild(postElement);
  });
}






