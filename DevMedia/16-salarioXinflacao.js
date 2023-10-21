import rl from "readline-sync"

const label_ano = "Ano: "
const label_salario = "Salário mínimo: " 
const label_ipca = "Inflação IPCA: "
const cresci_salarial = "Crescimento salarial: "

let ano_salario_inflacao = [
    {Ano: 2010, salario: 510, inflacao: 5.91},
    {Ano: 2011, salario: 545, inflacao: 6.50},
    {Ano: 2012, salario: 622, inflacao: 5.84},
    {Ano: 2013, salario: 678, inflacao: 5.91},
    {Ano: 2014, salario: 724, inflacao: 6.41},
    {Ano: 2015, salario: 788, inflacao: 10.67},
    {Ano: 2016, salario: 880, inflacao: 6.29},
    {Ano: 2017, salario: 937, inflacao: 2.95},
    {Ano: 2018, salario: 954, inflacao: 3.75},
    {Ano: 2019, salario: 998, inflacao: 4.31},
    {Ano: 2020, salario: 1045, inflacao: 4.52}
]

let escolha_correta = 0
for (let index = 0; index <= escolha_correta; index++) {

console.log("Escolha uma das alternativas:\n")
console.log(`1- Listar os salários minímo de 2010 à 2020
2- Listar os índice IPCA de 2010 à 2020
3- Comparação entre o percentual de aumento salarial e o IPCA
4- Encerre o programa`)

let escolha = rl.question("\nDigite o numero da sua escolha: ")
    escolha = parseInt(escolha)
    
switch (escolha) {
    case 1:
        for (let index = 0; index <= 10; index++) {
            console.log(label_ano.padEnd(25,".")+ano_salario_inflacao[index].Ano)
            console.log(label_salario.padEnd(25,".")+ano_salario_inflacao[index].salario.toFixed(2).replace(".",",")+"\n")
        }
        break;
    case 2:
        for (let index = 0; index <= 10; index++) {
            console.log(label_ano.padEnd(25,".")+ano_salario_inflacao[index].Ano)
            console.log(label_ipca.padEnd(25,".")+ano_salario_inflacao[index].inflacao.toFixed(2).replace(".",",")+"%\n")
        }
        break;
    case 3:
        let contagem = 0
        
        for (let contador = 0; contador <= 10; contador++) {
            console.log(label_ano.padEnd(25,".")+ano_salario_inflacao[contador].Ano)
            console.log(label_salario.padEnd(25,".")+ano_salario_inflacao[contador].salario.toFixed(2).replace(".",","))
            
            if (contador == 0) {
                console.log(cresci_salarial.padEnd(25,".")+" -")
            } else {
                let diferenca = 0
                diferenca = ano_salario_inflacao[contador].salario - ano_salario_inflacao[contagem].salario
                let calculo_porcentagem = (diferenca/ano_salario_inflacao[contagem].salario)*100
                console.log(cresci_salarial.padEnd(25,".")+calculo_porcentagem.toFixed(2).replace(".",",")+"%")
                contagem++
            }
    
            console.log(label_ipca.padEnd(25,".")+ano_salario_inflacao[contador].inflacao.toFixed(2).replace(".",",")+"%\n")

        }
        break;
    case 4:
        console.log("Programa encerado")
        break;
    default:
        console.log("\nOpção invalida, digite outro numero\n")
        escolha_correta++
        break;
    }
}