function passo(numero, callback1, callback2) {
    const resultado1 = callback1(numero); // Aplica o primeiro callback
    const resultado2 = callback2(resultado1); // Aplica o segundo callback com base no resultado do primeiro
    console.log("Resultado final:", resultado2);
}


passo(2, 
    (num) => num * 2, // Primeiro callback dobra o número
    (num) => num + 10 // Segundo callback soma 10
);