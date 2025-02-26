
function quadradoperfeito(n){
    if (n < 0) return false; // Numero negativo é impossível ser quadrado perfeito
    let raiz = Math.sqrt(n); // Math é uma biblioteca de matemática do JS. A função sqrt calcula a raiz do número.
    // isInteger retorna true se o valor passado como argumento for um número inteiro e false caso contrário. O método isInteger só pode ser chamado com o objeto "Number".
    return Number.isInteger(raiz); 
}

console.log(quadradoperfeito(8))
console.log(quadradoperfeito(4))