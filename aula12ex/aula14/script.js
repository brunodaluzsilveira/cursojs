function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        // Manhã
        imagem.src = 'foto-manha.png'
        document.body.style.background = '#FEE65F'
    } else if (hora >= 12 && hora < 18) {
        // Tarde
        imagem.src = 'foto-tarde.png'
        document.body.style.background = '#ECC8B0'
    } else {
        // Noite
        imagem.src = 'foto-noite.png'
        document.body.style.background = '#131429'
    }
}