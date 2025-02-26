// Criando e manipulando um array de objetos
// Crie um array de objetos representando pessoas e filtre as que têm mais de 25 anos.

const pessoas = [
    { nome: "Bruna", idade: 20 },
    { nome: "Rodrigo", idade: 28 },
    { nome: "Benjamin", idade: 32 },
    { nome: "Levi", idade: 18 },
  ];
  /*
  O método filter percorre o array pessoas e retorna um novo array contendo apenas os elementos que passaram na condição estipulada. 
  pessoas => é uma arrow function. Se a condição for true, o elemento entra no novo array
  */
const maior25 = pessoas.filter(pessoas => pessoas.idade > 25); 
  console.log(maior25);