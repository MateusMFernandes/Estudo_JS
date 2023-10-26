import rl from "readline-sync"

function lucro() {
    const quantidade = rl.question("Quantas unidades vendidas: ")
    let valor_1 = rl.question("Valor de venda: ")
    const valor_2 = rl.question("Valor de Compra: ")
    const porcentagem = rl.question("Porcentagem: ")
    const porcentagem_lucro = (valor_1*quantidade)/porcentagem

    console.log(`total de lucro é de ${porcentagem_lucro}`)
}
lucro()


/*function corote() {
    const qcorote = Number(document.getElementById("corote").value)
    const respCorote = document.getElementById("resCorote")

    const porcorote = (5.50*qcorote)/100*44
    const valcorote = 5.50*qcorote

    respCorote.innerHTML =`<p>Lucro: ${porcorote}</p>\n
    <p>Valor total: ${valcorote}</p>`
}*/