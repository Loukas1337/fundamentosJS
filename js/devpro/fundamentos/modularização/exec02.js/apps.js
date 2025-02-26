const { multiplicacao, divisao } = require("./operacoes");
const { mensagemok, mensagemerro } = require("./mensagens");


const resultado1 = multiplicacao(3, 3);
console.log(resultado1, mensagemok());

const resultado2 = divisao(50, 0);
console.log(resultado2, mensagemerro());