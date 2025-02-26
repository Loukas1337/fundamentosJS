
// Criando um objeto
let amigo = {nome:'Jose',
sexo: 'M',
peso: 85.2,
engordar(p=0){ // Criando um método dentro do objeto para aumentar o peso
    console.log('Engordou')
    this.peso += p // "this" refere-se ao próprio objeto "amigo". Aumenta o peso do objeto pelo valor passado como argumento
}}
amigo.engordar(2) // Chamando o método "engordar" e passando 2 como argumento
console.log(`o amigo ${amigo.nome} engordou ${amigo.peso} kg.`)
