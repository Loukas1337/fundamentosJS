

function verificaranagrama(palavra1, palavra2){
    if (typeof palavra1 !== 'string' || typeof palavra2 !== 'string') { // Verificando se as duas palavras são strings
        return false;
    }
    //Split: Transforma a string em um array de caracteres. sort: Ordena os caracteres em forma crescente. join: Junta os elementos do array em uma nova string.
    return palavra1.split('').sort().join('') === palavra2.split('').sort().join(''); 
}

console.log(verificaranagrama('amor', 'roma'));
console.log(verificaranagrama('tatakae', 'lute'));