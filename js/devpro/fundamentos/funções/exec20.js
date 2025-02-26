// Exibir uma Mensagem e Parar Após um Tempo
// Exiba "Executando..." a cada segundo e pare após 5 repetições.

let i = 0;
//criando o contador até 5
let temporizador = setInterval (() => {
    console.log('Calculando...');
    i++; // Incremetando para chegar até o 5
    if (i === 5) {
        // Parando a contagem e em seguida printa a mensagem
        clearInterval (temporizador);
        console.log('Acabou');
        return;
    }
}, 1000);