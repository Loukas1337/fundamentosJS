
function verificar(texto){
    // Converte a palavra para minúsculas e remove espaços para garantir que a comparação seja correta
    texto = texto.toLowerCase().replace(/\s+/g, '');

    // Compara a palavra com a sua versão invertida
    return texto === texto.split('').reverse().join('');  // split('') divide a palavra em um array de caracteres. reverse() inverte a ordem dos caracteres. join('') junta os caracteres de volta em uma string.
}

console.log(verificar('banana'))
console.log(verificar('xbox'))
console.log(verificar('arara'))
