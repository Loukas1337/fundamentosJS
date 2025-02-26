// Filtrar Números Pares
// Crie uma função filtrarPares que recebe um array de números e uma função de callback. 
// A função de callback deverá verificar se o número é par. A função filtrarPares deve retornar um novo array contendo apenas os números pares.

function filtrarPares (lista, callback){
    const pares = []
    for (let i = 0; i < lista.length; i++)
        if (callback(lista[i])){ // Aqui chamamos a função 'ehPar'
            pares.push(lista[i]); // Adiciona o número ao array 'pares'
        }
        return pares
}

function par(n){
    return n % 2 === 0; 
}

console.log(filtrarPares([1, 3, 5, 7, 9, 10, 12], par))