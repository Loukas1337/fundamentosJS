// Percorrendo um objeto
// Use um loop for...in para exibir todas as propriedades e valores do objeto pessoa.

const pessoa = { nome: 'Mob', idade: 20, profissao: 'Carpinteiro' };

for (let chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`)
}