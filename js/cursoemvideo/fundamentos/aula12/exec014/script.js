
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 21
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manharight.png'
        document.body.style.background = '236, 225, 175'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'tarderight.png'
        document.body.style.background = '#d18e36'
    } else {
        img.src = 'noiteright.png'
        document.body.style.background = '#314094'
    }
}
