// Gerador de Tabuada
// Crie uma função chamada tabuada que recebe um número e imprime a tabuada desse número de 1 a 10.

function tabuada(n){
    for (let i = 1; i <= 10; i++){
        console.log(`${n} x ${i} = ${n * i}`)
    }
}

console.log(tabuada(5))