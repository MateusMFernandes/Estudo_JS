var agora= new Date()
var hora = agora.getHours()
if (hora < 6) {
    console.log("Boa madrugada!")
} else if (hora < 12) {
    console.log("Bom dia!")
} else if (hora < 19) {
    console.log("Boa tarde!")
} else if (hora <= 23) {
    console.log("Boa Noite!")
}