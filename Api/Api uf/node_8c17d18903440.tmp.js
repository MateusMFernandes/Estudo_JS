import colecaoUf from './dados.js'
import express from 'express'

const app = express()

const buscarnomesUf = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLocaleLowerCase()))
}

app.get('/ufs',(req,res)=>{
    const nomeUf = req.query.buscar
    const resultado = nomeUf?buscarnomesUf(nomeUf):colecaoUf
    if (resultado.length > 0) {
        res.json(resultado)
    } else {
        res.status(404).send({"erro":"Nenhuma Uf encontrada"})
    }
})

app.get('/ufs/:iduf',(req,res)=>{
    const idUF = parseInt(req.params.iduf) 
    let mensagemErro = ''
    let uf

    if (!(isNaN(idUF))) {
        uf = colecaoUf.find(u => u.id === idUF)
        if(!uf){
        mensagemErro = 'UF não encontrado'
        }
    }else {
        mensagemErro = 'Requisição invalida'
    }

    if(uf){
        res.json(uf)
    } else {
        res.status(400).send({"erros":mensagemErro})
    }
})

app.listen(8080,() =>{
    console.log('Server iniciado')
})