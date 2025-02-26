// Exercício básico: Criando uma função assíncrona
// Crie uma função esperarMensagem que retorna a string "Operação concluída!" após 2 segundos.

function esperar() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Operação concluída!"), 2000);
    });
}

async function esperarMensagem() {
    let resposta = await esperar();
    return resposta;
}

esperarMensagem().then(console.log); // Deve exibir "Operação concluída!" após 2 segundos
