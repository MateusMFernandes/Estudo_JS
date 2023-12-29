let dados = require('./dados')

function retorna_frase(dia) {
    return dados.frases[dia-1]
}

exports.retorna_frase = retorna_frase