// Criando e exportando um módulo simples (CommonJS - Node.js)
// Crie um módulo chamado math.js que exporta funções de soma e subtração. Depois, importe e utilize essas funções no arquivo app.js.

function soma (a, b){
    return a + b;
}

function subtracao (a, b){
    return a - b;
}

module.exports = {soma, subtracao}; // objeto especial no Node.js que define quais valores um módulo deve disponibilizar para outros arquivos.