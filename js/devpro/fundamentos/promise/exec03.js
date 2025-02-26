// Simulando uma Requisição de API
// Crie uma função chamada fetchUserData(id) que retorna uma Promise.
// Se o id for par, a Promise deve ser resolvida com um objeto { id, nome: "Usuário Teste" } após 1 segundo.
// Se o id for ímpar, a Promise deve ser rejeitada com a mensagem "Usuário não encontrado!".
// Teste chamando fetchUserData(2) e fetchUserData(3), tratando ambos os casos com .then() e .catch().



// simula uma requisição de API e retorna uma Promise
function fetchUserData(id) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => { // Simula um atraso de 1 segundo na resposta
            if (id % 2 === 0) {
                resolve ({id, nome: "Usuário teste"}); // Resolve a Promise com um objeto contendo ID e nome
            } else {
                reject ("Usuário não encontrado"); // Rejeita a Promise com uma mensagem de erro
            }
        }, 1000); // Tempo de espera 1 segundo
        });
}

fetchUserData(2)
.then(user => console.log("Sucesso:", user))
.catch(error => console.log("Erro:", error));


fetchUserData(3)
.then(user => console.log("Sucesso:", user))
.catch(error => console.log("Erro:", error));
