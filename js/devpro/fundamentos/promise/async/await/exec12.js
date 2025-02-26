// Criando um simulador de API com fetch() e await

async function buscarPublicacao() {
    console.log("Buscando...")

    let resposta = await fetch ('https://jsonplaceholder.typicode.com/posts/1') // Fazendo a requisição HTTP com fetch
    let publi = await resposta.json() // Convertendo o arquivo de promise para json

    console.log('ID:', publi.id) // Imprimindo o id do HTTP
}

buscarPublicacao()