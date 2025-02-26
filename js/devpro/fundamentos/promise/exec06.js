// Promise.race()
// Modifique as funções do exercício anterior para usar Promise.race() e exibir apenas o primeiro resultado que for resolvido.

function fetchPosts() {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve (["Post 1", "Post 2"]); // Retorna o total de posts depois de 2 segundos
        }, 2000);
    });
}

function fetchComments() {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve (["Comentário A", "Comentário B"]); // Retorna o total de comentários depois de 1 segundos
        }, 1000);
    });
}


function fetchLikes() {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve ({ total: 30 }); // Retorna o total de curtidas depois de 3 segundos
        }, 3000);
    });
}

/* O Promise.race() é um método que recebe um array de Promises e retorna uma nova Promise que resolve ou rejeita assim que a primeira Promise no array for resolvida ou rejeitada. 
Ou seja, ele "corre" para ver qual Promise será resolvida ou rejeitada primeiro e, em seguida, retorna o valor (ou erro) dessa Promise. 
No caso, a primeira resolvida é a fetchComments por conter um timer menor (1s).
Assim que é resolvida, é passada automaticamente para o .then*/

Promise.race([fetchPosts(), fetchComments(), fetchLikes()])
    .then (results => {
        console.log('Primeiro resultado:', results) // Exibe o primeiro resultado
    })

    .catch ( error =>{
        console.error('Erro: ', error)  
    });
    

