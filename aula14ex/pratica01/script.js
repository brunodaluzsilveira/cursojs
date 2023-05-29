var botao = document.getElementById('botao')

botao.addEventListener('click', gerarTabuada)

function gerarTabuada(){
    var txtNumber = document.getElementById('ntxt')
    var res = document.getElementById('resp')
    if (txtNumber.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var num = Number(txtNumber.value)
        var c = 1
        res.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('p')
            item.style.border = '1px solid black'
            item.style.backgroundColor = 'rgba(37, 37, 37, 0.795)'
            item.style.color = 'white'
            item.textContent = `${num} x ${c} = ${num * c}`
            res.appendChild(item)
            c++
        }
    }
}
