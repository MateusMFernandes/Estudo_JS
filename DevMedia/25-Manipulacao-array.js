const diasDaSemana = [
    "domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"
];
diasDaSemana.push("Sabado")
//inserindo o elemento sabado na ultima posição do array 
diasDaSemana.splice(1,1)
// removendo elementos de uma array, primeiro parametro e a posiçao e o segundo parametro é quantos serao removidos apos a posição
diasDaSemana.pop()
//removendo o ultimo elemento do array
diasDaSemana.shift()
//remoendo o primeiro elemento do array

function abreviar(diasDaSemana) {
    return diasDaSemana.substr(0,3)
}
const diasDaSemanaAbreviado = diasDaSemana.map(abreviar)
console.log(diasDaSemanaAbreviado)
//funcao map ultilizada para percorer um array e criar um novo com elementos