const express = require('express') 
const app = express()   

app.get('/', (req,res) => {
    let mensagem = {mensagem:"Ola, Mundo!"}
    res.json(mensagem)
})

app.listen(8080, () => {
    let data = new Date()
    console.log("Servidor node iniciado em: "+ data)
})

/*
 A primeira seção é responsavel por preparar o express e o torna ultilizavel dentro da nossa aplicação

 Na segunda aplicação ultilizamos a funcao get contida na variavel app, que pertence ao express

 Na ultima seção ultilizamos a função listen do express, através da variavel app
 A função listen faz nossa aplicação monitorar as requisiçoes através de uma porta Http
*/
