// Criando um Contador com Métodos
// Crie uma função construtora chamada Contador.
// Ela deve ter um atributo valor inicializado em 0 e três métodos:

// incrementar(): aumenta valor em 1.
// decrementar(): diminui valor em 1.
// mostrar(): imprime o valor atual no console.


function Contador(valor=0){
    this.valor = valor
    this.incrementar = function (){
        this.valor +=1;
    }
    this.decrementar = function() {
        this.valor -=1;
    }

    this.mostrar = function() {
        console.log(`O valor atual é ${this.valor}`)
    }
}

const contador = new Contador();
contador.incrementar();
contador.incrementar();
contador.mostrar(); // Deve imprimir 2
contador.decrementar();
contador.mostrar(); // Deve imprimir 1