function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = window.document.getElementById("anonasc")
    var resul = document.getElementById("resultado")
    if (nasc.value.length == 0 || nasc.value > ano) {
        window.alert("Erro, verefique os dados!")
    } else {
        var sexo = document.getElementsByName("radsex")
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked){ 
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','criança-m.jpg')
            } else if (idade < 21){
                img.setAttribute('src','jovemM.jpg')
            }else if (idade < 50){
                img.setAttribute('src','adultoM.jpg')
            } else {
                img.setAttribute('src','idososM.jpg')
            }
        } else if (sexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','criançaF.jpg')
            } else if (idade < 21){
                img.setAttribute('src','jovemF.jpg')
            }else if (idade < 50){
                img.setAttribute('src','adultoF.jpg')
            } else {
                img.setAttribute('src','idosoF.jpg')
            }
        }
        resul.innerHTML=`Detectei que vocé é um ${genero} de ${idade} anos de idade. <br>`
        resul.appendChild(img)
    }
}