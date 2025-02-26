// Rejeição de uma Promise
// Modifique a função delayedMessage para que ela tenha 50% de chance de rejeitar a Promise com a mensagem "Erro: Algo deu errado!".
// Use .then() para exibir a mensagem de sucesso e .catch() para exibir a mensagem de erro.


function delayedMessage (){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) { // Math.random(), gera um número entre 0 e 1 (ter 50% de chance)
                resolve ('Olá mundo');
            } else {
                reject("Algo deu errado.");
        };
        }, 2000);
    });
}


delayedMessage()
.then (mensagem => {
    console.log("Sucesso: ", mensagem);
})

.catch (erro => {
    console.log('Falha:', erro);
});