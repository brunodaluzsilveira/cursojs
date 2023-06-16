var num = [12, 17, 30]

num[3] = 3
num.push(33)

console.log(`O vetor tem ${num.length} posições, e o nosso vetor é o ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

var valor = 12
var pos = num.indexOf(valor)

if (pos == -1) {
    console.log(`O valor ${valor} não foi encontrado!`)
} else {
    console.log(`O valor ${valor} está na posição ${pos}`)
}