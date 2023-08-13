
var inicio = 5
var fim = 12
var passos = 0

if (inicio<fim) {
    while (inicio < fim) {
        console.log(inicio)
        var inicio = inicio+passos
    }
} else if (inicio>fim) {
    console.log("[Erro] o fim não pode ser maior que o começo")
} else if (passos < 1) {
    console.log("Meu passo não pode ser 0, considerando isso meu passo sera marcado com 1")
    for (var um = 1; um < fim; um++) {     /**FINALIZAR AINDA  */
        console.log(inicio)
    }
}



/*var fim = 12
for (var inicio = 5; inicio < fim; inicio++) {
    console.log(inicio)
}*/