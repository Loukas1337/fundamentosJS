

function esperarESomar(a, b, callback) {
    setTimeout(() => { // O setTimeout() é uma função assíncrona que executa uma ação após um determinado tempo.
        callback(a + b); // Chama o callback com a soma após 2 segundos
    }, 2000); // 2000 milissegundos
}

// Teste
esperarESomar(2, 3, (resultado) => {
    console.log("Soma após 2 segundos:", resultado);
});
