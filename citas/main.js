const d = document,
  $text = d.getElementById("text");

const citas = [
  "Si estás cambiando el mundo estás trabajando en cosas importantes.",
  "La única forma de hacer un gran trabajo, es amar lo que haces.",
  "Si puedes imaginarlo, puedes programarlo.",
  "Si cabe en tu mente, cabe en tu mundo.",
];

d.addEventListener("click", (e) => {
  if (e.target.matches("#btn")) {
    let random = Math.floor(Math.random() * citas.length);
    $text.textContent = citas[random];
  }
});
