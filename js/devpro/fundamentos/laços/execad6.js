

function palindromo(texto){
    let padronizada = texto.toLowerCase(); //  Converte para minúsculas e remove espaços
    let invertida = padronizada.split('').reverse().join('');
    return padronizada === invertida;
}

console.log(palindromo('Goku'));
console.log(palindromo('arara'));
