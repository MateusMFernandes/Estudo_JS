function carregar() {
    var img = document.getElementById("imagem")
    var msg = document.getElementById("msg")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML=`<p>Agora são ${hora} Horas</p>`
    if (hora >= 0 && hora < 12) {
        img.src='img3.jpg'
        document.body.style.background='#e2cd9f'
        
    } else if (hora >= 12 && hora < 18){
        img.src='img2.jpg'
        document.body.style.background='#b9846f'

    } else {
        img.src='img1.jpg'
        document.body.style.background='#515154'
    }
}

