let data = new Date()
let hora = data.getHours()
let min = data.getMinutes()
let msg

if (hora < 12) {
    msg = "Bom dia"
} else if (hora <= 17) {
    msg = "Boa tarde"
} else {
    msg = "Boa Noite"
}

console.log(`${msg} 
Agora são ${hora} Horas e ${min} Minutos.`)
