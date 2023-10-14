let cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }   
]
    for (let cursos of cursos_idiomas) {
        let nome_curso = cursos.nome
        let preco_curso = cursos.preco
        let carga_horaria = cursos.carga_horaria

        let preco_hora_curso = preco_curso/carga_horaria
        
        console.log("\nNome do curso: " + nome_curso);
        console.log("Carga horária do curso: " + carga_horaria + " horas");
        console.log("Preço do curso: R$" + preco_curso + ",00");
        
        if ( preco_hora_curso >= 15) {
            console.log("Hora/aula superior ou igual a R$15,00");
        } else {
            console.log("Hora/aula inferior a R$15,00");
        }
    
        console.log("\n");
    
}