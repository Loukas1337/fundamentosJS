

function éprimo(n){
    if (n < 2) return false; // Números menores que 2 não são primos.
    if (n === 2) return true; // 2 é o único número par que é primo.
    if (n % 2 === 0) return false; // Números pares maiores que 2 não são primos
    /*i = 3 faz com que iniciamos o loop no número 3 (visto que numeros menores que 2 não são primos, já o 2 é o único número par que é primo). A chamada math.sqrt
     A razão é que, se um número n tiver um divisor maior que a raiz quadrada de n, o divisor correspondente menor que a raiz quadrada já terá sido encontrado. 
     Por exemplo, se estamos verificando se 36 é primo, a raiz quadrada de 36 é 6, e os divisores de 36 (como 2, 3, 4, 6, etc.) 
     são encontrados dentro desse intervalo (de 1 até 6).
    Isso reduz a quantidade de verificações, tornando o código mais eficiente. Já o i += é para que apenas os números impares sejam considerados no loop.*/
        
    for (let i = 3; i <= Math.sqrt(n); i += 2) { 
        if (n % i === 0) return false;
    }

    return true; // Se não encontrou divisores, o número é primo
}

console.log(éprimo(35));
console.log(éprimo(10));
console.log(éprimo(2));
console.log(éprimo(81));
console.log(éprimo(7));
