const dados = require('./dados.js') 
const funcao = require('./funcao.js')

let data_app = new Date()

const nome_signo = funcao.retorna_signo(dados.colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo);