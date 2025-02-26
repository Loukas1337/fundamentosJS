// Criando um Construtor para um Objeto de Carro
// Crie uma função construtora chamada Carro que recebe marca, modelo e ano.
// Adicione um método chamado detalhes que imprime:
// "Este carro é um [marca] [modelo] do ano [ano]."

function Carro(marca, modelo, ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.detalhes = function (){
        console.log(`Este carro é um ${this.marca} ${this.modelo} do ano ${this.ano}.`)
    }
}

const carro1 = new Carro("Toyota", "Corolla", 2022);
carro1.detalhes();