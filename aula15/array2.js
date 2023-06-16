var valores = [12, 17, 10, 30, 20, 25]
/*
for (var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}