
function eprimo(n) {
    if (n < 2) return false; // Retorna falso para números menores que 2, pois não são primos
    for (i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0) return false; // Se for divisível, não é primo
    }
    return true; // Se não encontrou divisores, é primo
}

function pegarprimo(n2) {
    let primos = []; // Array para armazenar os números primos
    
    // Percorre de 2 até n2 e verifica se o número é primo
    for (let i = 2; i <= n2; i++) {
        if (eprimo(i)) {
            primos.push(i); // Adiciona o número primo ao array
        }
    }
    return primos; // Retorna a lista de primos encontrados
}

console.log(pegarprimo(20))