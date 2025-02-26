

function media(numeros) {
    if (numeros.length === 0){ // Descobrindo se o array está vazio
        return "Impossível calcular a média, array vazio."
    }
    // O método reduce() percorre o array e executa a função de callback (acumulador, valor) => acumulador + valor para cada elemento, acumulando a soma dos valores.
    let soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0); 
    return soma / numeros.length; // Retorna a média aritmética (soma total dividida pela quantidade de números)
}

let lista1 = [2, 4, 5, 10]
let lista2 = []

console.log('A média da lista 1 é:', media(lista1)); // Exibindo o resultado no console