// Contador Simples
// Crie um contador que exiba no console os números de 1 a 10, com um intervalo de 1 segundo entre cada número.

let count = 1
let interval = setInterval (() => {
    console.log(count);
    if (count === 10){
        clearInterval (interval)
    }
    count ++;

}, 1000);