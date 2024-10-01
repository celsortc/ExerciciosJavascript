const botao = document.querySelector(".botao");

if (botao) {
  function somar() {
    let div = document.querySelector("div");
    let numero = Number(div.innerHTML);

    if (numero < 10) {
      numero += 1;
    } else {
      console.log("o total já é 10, não é possível adicionar ao total");
    }
    div.innerHTML = numero;
  }

  botao.addEventListener("click", somar);
} else console.log("sumiu botao");
