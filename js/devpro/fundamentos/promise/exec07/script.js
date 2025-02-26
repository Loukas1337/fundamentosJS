// Obtém a referência ao elemento <ul> com o ID 'users' no HTML
const ul = document.getElementById('users');

// URL da API que retorna uma lista de usuários fictícios
const url = 'https://jsonplaceholder.typicode.com/users';

// Faz a requisição para a API usando fetch()
fetch(url)
    .then((resp) => resp.json()) // Converte a resposta para JSON
    .then(function (data) { // Recebe os dados convertidos. data é um array contendo a lista de usuários retornada pela API.
        console.log(data); // Exibe os dados no console para depuração

        // Percorre o array de usuários e cria um <li> para cada um
        return data.map(function (user) { // Método map é usado para percorrer um array e retornar um novo array com os elementos transformados conforme uma função de callback. Nesse caso, ele não retorna um array explícito, pois os elementos <li> são apenas criados e adicionados ao DOM. .forEach() poderia ser usado também.
            let li = document.createElement('li'); // Cria um elemento <li>
            li.innerHTML = `${user.name} (${user.username})`; // Define o conteúdo do <li>
            ul.appendChild(li); // Adiciona o <li> dentro do <ul>
        });
    })
    .catch((error) => { // Captura erros na requisição
        console.log('Oops!' + error); // Exibe o erro no console
    });
