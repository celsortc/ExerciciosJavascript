const botao = document.querySelector(".botao");

botao.addEventListener("click", mostrar);

function mostrar() {
  const texto = document.querySelector(".texto");
  texto.classList.toggle("ativar");
}
