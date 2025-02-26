// Tratando erros com try...catch
// Crie uma função buscarDados que pode dar erro 50% das vezes. Se der erro, a função deve exibir "Erro ao buscar os dados".

function buscarDados () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            if (Math.random() > 0.5){ // 50% de chance de sucesso ou erro
                resolve("Dados coletados.");
            }else {
                reject('Dados não coletados.')
            }
        }, 2000);
    });
}

// Função assíncrona que tenta carregar os dados
async function carregarDados() {
    console.log('Loading...') // Mostra a mensagem antes de iniciar a requisição
    try{
        let resultado = await buscarDados() // Aguarda a Promise ser resolvida
        console.log(resultado); // Se bem-sucedida, exibe os dados recebidos

    }catch (erro) {
        console.error('Erro:', erro);
    }

}

// Chama a função
carregarDados()