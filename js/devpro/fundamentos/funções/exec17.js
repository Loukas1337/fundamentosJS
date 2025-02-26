// Somando Números até um Limite
// Escreva um programa que usa while para somar números positivos digitados pelo usuário.
// O loop deve parar quando o usuário inserir um número negativo.

const readlineSync = require("readline-sync"); // Para o cód rodar no Node.JS, é necessário importar essa biblioteca
let soma = 0;
let numero ;

while (true) {
    numero = parseInt(readlineSync.question("Digite um número (negativo para sair):")); // No lugar do readlinkesync pode ser utilizado o prompt, para verificar no navegador.
    if (isNaN(numero)){ // Verifica se o dado digitado não é um número
        console.log("Entrada inválida! Digite um número.");
        continue;
    }
    if (numero < 0) { // Sai do loop se o número for negativo
        break;
    }

    soma += numero;
}

console.log("A soma dos números digitados é:", soma);