// Criando um Banco de Conta Simples
// Crie uma função construtora chamada ContaBancaria.
// Ela deve ter:

// Um atributo saldo, que começa em 0.
// Um método depositar(valor), que aumenta o saldo.
// Um método sacar(valor), que diminui o saldo se houver saldo suficiente.
// Um método mostrarSaldo(), que imprime o saldo atual.


function ContaBancaria(saldo=0){
    this.saldo = saldo
    this.depositar = function (valor){
        if (valor > 0){
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado. Saldo atual: ${saldo}`)
        }else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    this.sacar = function (valor){
        if (valor > this.saldo) {
            console.log('Saldo insuficiente.')
        } else if (valor > 0) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor}. Saldo atual é de R$ ${this.saldo}`)
        }else {
            console.log('O valor do saque deve ser positivo.')
        }
    }

    this.mostrarSaldo = function(){
        console.log(`Saldo atual: R$ ${this.saldo}`)
    }
    

}

const minhaConta = new ContaBancaria();
minhaConta.depositar(50);
minhaConta.sacar(30);
minhaConta.mostrarSaldo(); // Retornar 20
minhaConta.sacar(100); // Retornar "saldo insuficiente"