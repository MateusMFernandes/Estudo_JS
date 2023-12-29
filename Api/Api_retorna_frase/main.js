let express = require('express')
const app = express()

let data = new Date()

 let mensagemDia = require('./mensagemDia')

 app.get('/',(req, res) => {
    let dia = data.getDate()
    let mensagemselecionada = mensagemDia.retorna_frase(dia)
    res.json({mensagem: mensagemselecionada})
 })

 app.listen(8080, () =>{
    console.log("Servidor iniciado em: " + data)
 })