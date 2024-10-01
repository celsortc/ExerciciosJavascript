function livro(nome, ano, autor) {
  const date = new Date();
  const anoAtual = date.getFullYear();
  const info = {
    nome: nome.toUpperCase(),
    idade: anoAtual - ano,
    frase: nome + ' por ' + autor,
  }
  return info;
}

const infoLivro = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');

console.log(infoLivro.frase)
