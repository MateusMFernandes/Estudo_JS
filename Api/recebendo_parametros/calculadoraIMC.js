function efetuarCalculoIMC(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}
function retornaStatusIMC(imc)

{
    let status =
    (imc < 18.5)?"Abaixo do peso":
    (imc >= 18.5 && imc < 24.9)?"Peso Normal":
    (imc >= 24.9 && imc < 30)?"Acima do Peso":"Obeso"
    return status
}

function validaParametro(parametro) {
    if(isNaN(parametro)){
        return false
    } else {
        return true
    }
}

exports.efetuarCalculoIMC = efetuarCalculoIMC;
exports.retornaStatusIMC = retornaStatusIMC;
exports.validaParametro = validaParametro