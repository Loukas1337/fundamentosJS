// Par ou Ímpar
// Crie uma função chamada ehPar que recebe um número e retorna true se for par e false se for ímpar.

function ehimpar(n){
    if (n % 2 == 0){
        return "Numero é par."
    } else {
        return "Numero impar."
    }
}

console.log(ehimpar(2))