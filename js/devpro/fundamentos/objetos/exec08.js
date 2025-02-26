// Trabalhando com Object.keys, Object.values e Object.entries
// Dado o objeto abaixo, liste as chaves, os valores e as entradas (pares chave-valor).

const produto = {
    nome: "Notebook",
    preco: 3500,
    disponivel: true
  };

console.log(Object.keys(produto))
console.log(Object.values(produto))
console.log(Object.entries(produto))