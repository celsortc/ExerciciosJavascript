function Livro(nome, ano, autor) {
  const nomeLivro = nome.toUpperCase();

  const date = new Date();
  const anoAtual = date.getFullYear();
  const idadeLivro = anoAtual - ano;

  const frase = nome + ' por ' + autor;

  const info = {
    nomeLivro: nomeLivro,
    idadeLivro: idadeLivro,
    frase: frase
  }
  return info;
}

const infoLivro = Livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');

console.log(infoLivro.frase)
