// Simulando uma requisição de API
// Crie uma função buscarUsuario que retorna um usuário fictício após 3 segundos.

function buscarUsuario() {
    return new Promise (resolve => {
        setTimeout(() => { // Simula um atraso de 3 segundos antes de retornar os dados
            resolve({id: 1, nome: "Valencio" }) // Usuário fictício para que a solução dê certo
        }, 3000);
    });
}


async function carregarUsuario() {
    console.log('Procurando usuário...') // Exibe mensagem antes de iniciar a requisição
    let resposta = await buscarUsuario() // Espera o Promise ser resolvido e armazena na variável resposta
    
    console.log('Econtrado:', resposta) // Exibe o usuário no console após a resolução da Promise
}

carregarUsuario()