import colecaoChuvasDeMeteoros from "./Data/chuva-meteoro.js"
import imprimeListaDeChuvas from './funcoes/funcoesInterface.js'
import { verificaChuvaVisivelPorData, verificaChuvaVisivelProximos2Meses } from './funcoes/funcoesLogicas.js'

const dataAtual = new Date()

const chuvaVisiveisHoje = colecaoChuvasDeMeteoros.filter((chuva) => verificaChuvaVisivelPorData (chuva, dataAtual))

const chuvasVisiveisProximo2Meses = colecaoChuvasDeMeteoros.filter((chuva)=> verificaChuvaVisivelProximos2Meses(chuva,dataAtual))
console.log('Chuva de meteoros')

if (chuvaVisiveisHoje.length > 0) {
    let msg = "\nEncontramos "
    msg+= chuvaVisiveisHoje.length == 1?'1 Chuva de meteoros que pode ser vista hoje':chuvaVisiveisHoje.length + ' chuvas de meteoros que podem ser vistas hoje'

    console.log(msg)

    imprimeListaDeChuvas(chuvaVisiveisHoje)
}else {
    console.log('\nNenhuma Chuva de meteoros passando no momento')
}
console.log('\n\nNão preca as próximas chuvas de meteoros: ')
imprimeListaDeChuvas(chuvasVisiveisProximo2Meses)