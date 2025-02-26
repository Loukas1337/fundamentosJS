// Criando uma função construtora
// Crie uma função construtora chamada Carro, que recebe marca, modelo e ano como parâmetros e cria um objeto.

function Carro (marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.detalhes = function() {
        return (`${this.marca}, ${this.modelo}, ano ${this.ano}.`)
    }
}

const umCarro = new Carro('Toyota', 'Hilux', 2022)
console.log(umCarro.detalhes());