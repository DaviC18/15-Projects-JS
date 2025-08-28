// textos de exemplo (array de parágrafos)
const text = [
  `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. ...`,
  `Next level tbh everyday carry, blog copper mug forage kitsch ...`,
  `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. ...`,
  `Cat gets stuck in tree firefighters try to get cat down ...`,
  `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. ...`,
  `Airedale hard cheese mozzarella. Pecorino melted cheese ...`,
  `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. ...`,
  `Man braid celiac synth freegan readymade, pitchfork fam salvia ...`,
  `Rutters Plate Fleet boom chandler Brethren of the Coast ...`,
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // parseInt com radix 10 para evitar comportamento estranho
  const value = parseInt(amount.value, 10);
  const random = Math.floor(Math.random() * text.length);

  // se não for número ou for <= 0: mostra um parágrafo aleatório
  if (Number.isNaN(value) || value <= 0) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
    return;
  }

  // se pedir mais parágrafos do que temos, apenas mostra todos
  const count = Math.min(value, text.length);

  // monta os parágrafos requisitados e insere no DOM
  const paragraphs = text
    .slice(0, count)
    .map((p) => `<p class="result">${p}</p>`)
    .join("");

  result.innerHTML = paragraphs;
});
