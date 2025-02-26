// Adicionando e removendo propriedades
// Adicione a propriedade profissão ao objeto pessoa e depois remova a propriedade cidade.

const pessoa = {
    nome: "Mob",
    idade: 20,
    cidade: "Japan",
};

pessoa.profissao = "Carpinteiro"
delete pessoa.cidade
console.log(pessoa)