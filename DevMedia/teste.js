let alunos = [
    {nome: 'Clara', idade: 18},
    {nome: 'Milena',idade: 19},
    {nome: 'Rodrigo', idade: 17},
    {nome: 'Thiago', idade: 19}
    ];

    function verificaAlunosMaiores(aluno) {
    return (aluno.idade > 18);
}

function filtraAlunosMaiores(alunos)
{
    let alunosFiltro = alunos.filter(verificaAlunosMaiores);
    return alunosFiltro;
}

function retornaNomesAlunos(alunos)
{
    let nomes = alunos.map(aluno =>aluno.nome);
    return nomes;
}

function imprimeNomesAlunos(arrayNomes)
{
    arrayNomes.forEach(nome => {
        console.log(nome);
    });
}

let alunosMaiores = filtraAlunosMaiores(alunos);
let nomesAlunos = retornaNomesAlunos(alunosMaiores);
imprimeNomesAlunos(nomesAlunos);