let situacao_aluno = function status(nota_1, nota_2, nota_3) {
    let media = (nota_1+nota_2+nota_3)/3
    let situacao = ""

    if (media >= 6) {
        situacao = "Aprovado"
    } else {
        situacao = "Reprovado"
    }
    return situacao
}
let sit_aluno_1 = situacao_aluno(4,8,3)
console.log(`O aluno esta ${sit_aluno_1}`)

let sit_aluno_2 = situacao_aluno(8,9,10)
console.log(`O aluno esta ${sit_aluno_2}`)