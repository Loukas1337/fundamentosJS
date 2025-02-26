// Criando uma Função Construtora Básica
// Crie uma função construtora chamada Pessoa, que recebe nome e idade e cria um objeto com esses atributos.

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const pessoa1 = new Pessoa("Carlos", 30);
console.log(pessoa1.nome);
console.log(pessoa1.idade);
