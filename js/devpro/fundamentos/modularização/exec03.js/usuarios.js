// Criando um módulo de classe
// Crie um módulo que define uma classe e importe-a em outro arquivo.



class Usuario{
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    exibir(){
        return `Nome: ${this.nome}, idade: ${this.idade}`
    }
}

module.exports = Usuario