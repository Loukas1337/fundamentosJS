// Encadeamento de Promises
// Crie duas funções que retornam Promises:
// getUserId(): Retorna um id aleatório entre 1 e 5 após 1 segundo.
// getUserData(id): Retorna um objeto { id, nome: "Usuário " + id } após 1 segundo.
// Use encadeamento (.then()) para chamar getUserId() e, com o resultado, chamar getUserData(), imprimindo o nome do usuário no console.



function getUserId (id) {
    return new Promise ((resolve) => {
        setTimeout (() => {
            /*Gera um número entre 1 e 5. Math.random() Gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo). 
            Multiplicar por 5 ajusta o intervalo para um número entre 0 e quase 5 (ex: 0.25 * 5 = 1.25).
            Math.floor() Arredonda para baixo o número gerado. Ex: Math.floor(4.9) → 4
            Como Math.floor(Math.random() * 5) pode gerar valores entre 0 e 4, somamos 1 para ajustar o intervalo de 1 a 5.*/
            const id = Math.floor(Math.random() * 5) + 1; 
            resolve (id); // Resolve a Promise com o ID gerado
        }, 1000);
    });
}


// Função que recebe um ID e retorna os dados do usuário após 1 segundo
function getUserData (){
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve ({ id, nome: "Usuário " + id }) // Retorna um objeto com ID e nome
        }, 1000);
    });
}

getUserId()
.then ((id) => {
    console.log('Id recebido.', id);
    return getUserData(id); // Usa o ID obtido para buscar os dados do usuário
})
