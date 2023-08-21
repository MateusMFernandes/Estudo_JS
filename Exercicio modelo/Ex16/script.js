let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flist")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}



function adicionar() {
    if (isNumero(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text=`O valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML=''
    } else {
        window.alert("Valor invalido ou ja encontrado na lista!")
    }
    num.value=''
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        window.alert("Adicione valores antes de finalizar")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for (let pos in valores) {
            if (valores[pos] > maior) 
                maior=valor[pos]
            if (valores[pos] < menor) 
                menor = valores[pos]
            
            }
        
        res.innerHTML=''
        res.innerHTML +=`<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML +=`O maio valor informado foi o ${maior} valor`
        res.innerHTML +=`O menor valor informado foi o ${menor} valor`
        }
    }
