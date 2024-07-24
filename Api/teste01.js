const express = require('express')
const app = express()

const livros = [
  { id: 1, titulo: 'Dom Quixote', autor: 'Miguel de Cervantes' },
  { id: 2, titulo: '1984', autor: 'George Orwell' },
  { id: 3, titulo: 'Orgulho e Preconceito', autor: 'Jane Austen' },
  { id: 4, titulo: 'Cem Anos de Solidão', autor: 'Gabriel García Márquez' },
];

app.get('/livros', (req, res) => {
  const id = Number(req.query.id);
  const livro = livros.find(livro => livro.id == id);

  if (livro) {
    res.json(livro);  
  } else {
    res.status(404).send();
  }
});
app.listen(8080,() =>{
  console.log('Servidor aberto')
})