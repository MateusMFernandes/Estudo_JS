import rl from 'readline-sync'

console.log(`--------QUIZ DE FATOS HISTORICO--------\n`)
var nome = rl.question(`Seja bem vindo jogador(a)!\n
Digite o seu nome: `)

var Rev_Francesa = rl.question(`1: Em que ano ocorreu a revolução Francesa ?\n
Digite a resposta (ano): `)
Rev_Francesa != 1920?"Resposta errada":"Resposta certa"
console.log(Rev_Francesa)

//funçoes para fazer: Coleção de dados, Questoes aleatorias, Exibir perguntas,  validar resp usuario, exibir result