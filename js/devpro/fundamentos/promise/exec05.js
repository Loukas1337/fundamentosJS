// Promise.all()
// Crie três funções que simulam requisições diferentes:
// fetchPosts(): Retorna ["Post 1", "Post 2"] após 2 segundos.
// fetchComments(): Retorna ["Comentário A", "Comentário B"] após 1 segundo.
// fetchLikes(): Retorna { total: 30 } após 3 segundos.
// Use Promise.all() para chamar todas essas funções ao mesmo tempo e exiba os resultados quando todas forem resolvidas.


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

// Inicia todas as três funções assíncronas ao mesmo tempo. As requisições são feitas simultaneamente, com o tempo de espera para a mais longa das funções (fetchLikes nesse caso)
Promise.all ([fetchPosts(), fetchComments(), fetchLikes()])
    .then (results => {
        const [posts, comments, likes] = results; // results contém um array com os valores retornados por cada função na mesma ordem
        console.log("Posts:", posts);
        console.log("Comments:", comments);
        console.log("Likes:", likes);
    })

    .catch( error => {
        console.error("Erro:", error)
    }
)