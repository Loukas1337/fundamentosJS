// Calcular Fatorial
// Crie uma função chamada fatorial que recebe um número inteiro positivo e retorna seu fatorial.

function fatorial(n){
    if (n === 0 || n === 1) return 1;
    return n * fatorial (n - 1);
}

console.log(fatorial(5))
