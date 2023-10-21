const dataultimoacesso = new Date("2020/11/11 17:00:00")
const data_atual = new Date()

const hora = data_atual.getHours()

const timeultimoacesso = dataultimoacesso.getTime()
const time_atual = data_atual.getTime()

const diferenca_time = time_atual-timeultimoacesso

const milessegundosHora = 1000*60*60
const milessegundosDia = milessegundosHora * 24

let msg = ""

if (hora < 6 || hora >= 18) {
    msg = "Boa noite\n"
} else if (hora >= 6 && hora < 12){
    msg= "Bom dia\n"
}else {
    msg="Boa tarde\n"
}

if (diferenca_time > milessegundosDia){
    msg += "Vocé esta ausente a dias!!!"
} else if (diferenca_time > milessegundosHora){
    msg+= "Vocé esta ausente há horas!!!"
} else {
    msg += "Que bom que ainda está aqui!"
}
console.log(msg)