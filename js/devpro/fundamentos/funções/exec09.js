// Maior Número de um Array
// Crie uma função chamada maiorNumero que recebe um array de números e retorna o maior valor encontrado.

function maiorNumero(n){
    return Math.max(...n); // A função Math.max() em JavaScript retorna o maior valor entre um ou mais números. É um método estático da biblioteca Math.
}

console.log(maiorNumero([2, 5, 1000, 9999]))