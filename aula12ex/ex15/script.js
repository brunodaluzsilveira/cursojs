function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('itxtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value.length <=3 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <=12) {
                //criança
                img.setAttribute('src', 'imagens/homem-crianca.png')
            } else if (idade < 20) {
                //adolescente
                img.setAttribute('src', 'imagens/homem-adolescente.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else if (idade < 120) {
                //idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')
            } else {
                //💀
                img.setAttribute('src', 'imagens/esqueleto.png')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <=12) {
                //criança
                img.setAttribute('src', 'imagens/mulher-crianca.png')
            } else if (idade < 20) {
                //adolescente
                img.setAttribute('src', 'imagens/mulher-adolescente.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else if (idade < 120) {
                //idoso
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            } else {
                //💀
                img.setAttribute('src', 'imagens/esqueleto.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}