// Inverter String
// Crie uma função chamada inverterString que recebe uma string e retorna ela invertida.

function inverterString(texto){
    return texto.split('').reverse('').join('');

    /*
    split - divide a string em uma array por caracteres;
     reverse - reverte a ordem do array;
     join - unifica o array em uma string
    */
}

console.log(inverterString("cachorro"))