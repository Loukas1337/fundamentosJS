// Executando múltiplas Promises em paralelo
// Crie duas funções:
// buscarProdutos (retorna "Produtos carregados" após 2s)
// buscarClientes (retorna "Clientes carregados" após 3s)
// Use Promise.all() para carregá-los ao mesmo tempo.

function buscarProdutos () {
    return new Promise (resolve => {
        setTimeout(() => resolve ("Produtos carregados"), 2000);
    });
}

function buscarClientes () {
    return new Promise (resolve => {
        setTimeout(() => resolve ("Clientes carregados"), 3000);
    });
}

async function carregarDados() {
    console.log('Loading...')

    let [produtos, clientes] = await Promise.all([buscarProdutos(), buscarClientes()]);

    console.log([produtos])
    console.log([clientes])

    console.log('Todos os dados foram carregados.')
}

carregarDados()