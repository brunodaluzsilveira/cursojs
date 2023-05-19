var botao = document.getElementById('contarId')
botao.addEventListener('click', contar)

function contar(){
    var inicioId = document.getElementById('inicioid')
    var fimId = document.getElementById('fimid')
    var passoId = document.getElementById('passoid')
    var res = document.getElementById('resultado')

    if (inicioId.value.length == 0 || fimId.value.length == 0 || passoId.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.style.color = 'black'
        res.style.fontStyle = 'normal'
        res.innerHTML = 'Contando: <br>'
        var ini = Number(inicioId.value)
        var fim = Number(fimId.value)
        var passo = Number(passoId.value)
        if (passo <= 0 ) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        if (ini < fim) {
            // contagem crescente
            for (var c = ini; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{27A1} ` 
            }
        } else {
            // contagem decrescente
            for (var c = ini; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{27A1} `
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}    