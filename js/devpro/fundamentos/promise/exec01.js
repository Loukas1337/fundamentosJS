// Criando uma Promise Simples
// Crie uma função chamada delayedMessage que retorna uma Promise e, após 2 segundos, resolve com a mensagem "Olá, mundo!".
// Chame essa função e exiba a mensagem no console quando a Promise for resolvida.



function delayedMessage (){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve ("Olá, mundo")
        }, 2000);
    });
}

delayedMessage().then((mensagem) => { // .then() para capturar o valor resolvido e exibi-lo no console
    console.log(mensagem);
});