let num = [3, 5, 9, 2]
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1){ // -1 no JS significa que não foi encontrado o valor
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor 9 está na posição ${pos}`)
}
