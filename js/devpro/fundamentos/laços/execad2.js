

function produtod(valor, percentuald){
    let  desconto = (valor * percentuald) /100;
    let valoratualizado = valor - desconto
    return valoratualizado
}

console.log(produtod(100, 10))