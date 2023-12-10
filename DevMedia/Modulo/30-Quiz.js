import rl from 'readline-sync'
import questoes from './questoes.js'

  console.log(`\n--------QUIZ DE FATOS HISTORICO--------\n`)
  var nome = rl.question(`Seja bem vindo jogador(a)!
Digite o seu nome: `)

  const QuestoesEmbaralhadas = questoes.sort(()=> Math.random()-0.5)

  let acertos = 0
   for (let index = 0; index < 10; index++) {
   let resp = rl.question(`\n${index + 1}:${QuestoesEmbaralhadas[index].pergunta}\nDigite a resposta (ano): `)  
   if (resp == QuestoesEmbaralhadas[index].resposta) {
    console.log("Resposta Correta!")
    acertos++
   } else {
    console.log("Resposta Incorreta!")
   }

}
console.log(`\nJogador(a): ${nome}
Pontuação final ${acertos} acertos`)
verificaPontos(acertos)

function verificaPontos(pontos) {
    if (pontos <= 3 ) {
        console.log("Tente novamente")
    } else if (pontos <= 6){
        console.log("Pratique um pouco mais")
    } else if (pontos <= 9){
        console.log("Vocé acertou a maioria")
    } else {
        console.log("Exelente, Vocé acertou todas")
    }
}

