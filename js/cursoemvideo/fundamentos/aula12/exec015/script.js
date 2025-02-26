

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente normalmente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto') // Inserindo a imagem via JS
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade == 0 || idade < 10) {
                // Criança
                img.setAttribute('src', 'bebemeninocorreto.png')
            } else if (idade <21){
                // Jovem
                img.setAttribute('src', 'jovemhomemcorreto.png')
            } else if (idade <50){
                // Adulto
                img.setAttribute('src', 'homemadultocorreto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'senhorcorreto.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade == 0 || idade < 10) {
                // Criança
                img.setAttribute('src', 'bebemeninacorreto.png')
            } else if (idade <21){
                // Jovem
                img.setAttribute('src', 'jovemmeninacorreto.png')
            } else if (idade <50){
                // Adulto
                img.setAttribute('src', 'mulheradultacorreto.png')
            } else {
                // Idosa
                img.setAttribute('src', 'senhoracorreto.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}