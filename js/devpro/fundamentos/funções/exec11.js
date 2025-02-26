function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.falar = function(){
        console.log( `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos`)
    };
}

const pessoa2 = new Pessoa("Ana", 25);
pessoa2.falar();


