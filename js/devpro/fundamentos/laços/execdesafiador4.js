

function filtrarnomeletra(nomes, letra) {
    // O método 'filter' cria um novo array com os elementos que atendem a condição.
    // 'startsWith' verifica se o nome começa com a letra fornecida - ignora maiúsculas/minúsculas.
    // => indica que estamos declarando uma função anônima. 'nome' é o parametro da função e o retorno dela é nome.startsWith(letra)
    /* É o mesmo que: nomes.filter(function(nome) {
    return nome.startsWith(letra);
    }); */
    return nomes.filter(nome => nome.startsWith(letra));
}

// Exemplo
const listaNomes = ["Lucas", "Pedro", "Bob Esponja", "Fallen", "Gabriel"];
console.log(filtrarnomeletra(listaNomes, "B")); 

