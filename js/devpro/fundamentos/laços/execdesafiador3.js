

function remover(lista) {
    // Set cria um novo conjunto a partir do array fornecido.
    // Set armazena apenas valores únicos, removendo automaticamente os duplicados. 
    // spread (...) para transformar o Set de volta em um array.
    return [...new Set(lista)];

}

// Chamando a função
console.log(remover([3, 5, 9, 9, 1, 1]))