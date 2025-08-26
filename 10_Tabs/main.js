const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  // garante que pegamos o botão mais próximo, mesmo se clicar num filho
  const btn = e.target.closest(".tab-btn");
  if (!btn) return; // saiu se não for um botão

  const id = btn.dataset.id;
  // remove active de todos os botões
  btns.forEach(function (b) {
    b.classList.remove("active");
  });
  // ativa apenas o botão clicado
  btn.classList.add("active");

  // esconde todos os artigos
  articles.forEach(function (article) {
    article.classList.remove("active");
  });
  // mostra o artigo correspondente
  const element = document.getElementById(id);
  if (element) element.classList.add("active");
});
