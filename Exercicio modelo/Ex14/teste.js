
var inicio = 50
var fim = 12
var passos = 2

if (inicio<fim && passos > 0) {
    while (inicio <= fim) {
        console.log(inicio)
        var inicio = inicio+passos
    }
} else if (inicio>fim) {
    console.log("[Erro] o fim não pode ser maior que o começo")
} else if(passos === 0) {
    console.log("Meu passo não pode ser 0, considerando isso meu passo sera marcado com 1")
    while (inicio<=fim) {
        console.log(inicio)
        inicio++

    }
}



/*var fim = 12
for (var inicio = 5; inicio < fim; inicio++) {
    console.log(inicio)
}*/