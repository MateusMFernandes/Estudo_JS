var num = [5,3,4]

num[3]=6
num.push(2)  /*Sempre a ultima posição de um array */

console.log(`O meu vetor tem ${num.length} posições e tem os seguintes numeros ${num}`)
console.log(num[0]) /*Mostra cada elemento dentro de sua posição*/
var pos = num.indexOf(4)
console.log(`O valor ${num[2]} esta na posição ${pos}`)