

function verificadorsenha(senha) {
    if (senha.length < 8){
        return false;
    }


    if (!/[A-Z]/.test(senha)){
        return false;
    }


    if (!/[a-z]/.test(senha)){
        return false;
    }


    if (!/[\W_]/.test(senha)) { 
        return false;
    }
    return true;
}

console.log(verificadorsenha('lucas123'))
console.log(verificadorsenha('saoiueC@958'))