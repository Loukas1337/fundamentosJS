// Criando um método dentro de um objeto
// Modifique o objeto pessoa para incluir um método apresentacao que retorna uma string apresentando a pessoa.

const pessoa = { 
    nome: 'Mob', 
    idade: 20, 
    profissao: 'Carpinteiro',
    apresentacao: function () {
        return console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e atuo como ${this.profissao}.`)
    }
};

console.log(pessoa.apresentacao())

