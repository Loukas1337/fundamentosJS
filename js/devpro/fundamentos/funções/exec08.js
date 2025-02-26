// Média de Notas
// Crie uma função chamada calcularMedia que recebe um array de números e retorna a média deles.

function calcularMedia(notas){
    if (notas.length === 0) return 0;
    let soma = 0;
    for (let nota of notas){
        soma += nota;
    }
    return soma / notas.length;
}

console.log(calcularMedia([10, 5, 5, 10]))