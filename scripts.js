const posts = [
  {
      title: "Naruto",
      content: "Naruto é um anime baseado no mangá de mesmo nome escrito por Masashi Kishimoto. A série gira em torno das aventuras vividas por Naruto Uzumaki, um jovem órfão habitante da Aldeia da Folha que sonha em se tornar o quinto Hokage, o maior guerreiro e governante da vila."
  },
  {
      title: "Dragon Ball",
      content: "A série segue as aventuras do protagonista, Son Goku, desde sua infância até a idade adulta enquanto ele treina artes marciais e explora o mundo em busca de sete esferas conhecidas como as Esferas do Dragão, que convocam um dragão que concede um desejo quando reunidas."
  },
  {
      title: "One piece",
      content: "A série foca em Monkey D. Luffy, um jovem feito de borracha, que, inspirado em seu ídolo de infância, o poderoso pirata Shanks, o Ruivo, parte em uma jornada do mar do East Blue para encontrar o tesouro mítico, o One Piece, e proclamar-se o Rei dos Piratas."
  }
];

const wrapper = document.getElementById("posts");

posts.forEach(createArticle);

function createArticle(post) {
  const article = document.createElement("article");
  article.classList.add("post");

  const title = document.createElement("h1");
  title.classList.add("post-title");
  const titleText = document.createTextNode(post.title);
  title.appendChild(titleText);
  article.appendChild(title);

  const content = document.createElement("p");
  const contentText = document.createTextNode(post.content);
  content.appendChild(contentText);
  article.appendChild(content);

  wrapper.appendChild(article);

}