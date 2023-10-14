import rl from 'readline-sync'
let linguagem = [
    "Javascript","PHP","Java","SQL"
]
console.log("Escolha uma Linguagem: ")
for (let i = 0; i < linguagem.length; i++) {
    console.log(i+1 +" - "+linguagem[i])
}
let esc = rl.question("Digite o numero da linguagem: ")
console.log(linguagem[esc-1])