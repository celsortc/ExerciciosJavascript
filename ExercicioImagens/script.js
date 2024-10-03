//seleciona todas as 3 imagens da ul
const imagens = document.querySelectorAll("#galeria li img");

function galeriaTrocar(event) {
  const principal = document.querySelector("#imagemPrincipal");
  const imagemClicada = event.currentTarget;
  principal.src = imagemClicada.src;
  principal.alt = imagemClicada.alt;
  // outra opção para a liniha do  ALT, é a mesma coisa mas e´bom ter os doiis no repertório
  // principal.setAttribute('alt', imagemClicada.getAttribute('alt'));
}

function galeriaClique(imagem) {
  imagem.addEventListener("click", galeriaTrocar);
}

imagens.forEach(galeriaClique);
