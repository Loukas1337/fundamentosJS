// Contador de Vogais
// Crie uma função chamada contarVogais que recebe uma string e retorna o número de vogais nela.

function contarVogais(texto){
    const vogais = "aeiouAEIOU";
    let c = 0;
    for (let i of texto){
        if (vogais.includes(i)) {
            c++;
        }
    }
    return c
}

console.log(contarVogais("Triturador"))