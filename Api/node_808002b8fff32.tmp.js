const express = require('express')
const app = express()

const planetas = [
    { id: 1, nome: 'Mercúrio' },
    { id: 2, nome: 'Vênus' },
    { id: 3, nome: 'Terra' },
    { id: 4, nome: 'Marte' },
    { id: 5, nome: 'Júpiter' },
    { id: 6, nome: 'Saturno' },
    { id: 7, nome: 'Urano' },
    { id: 8, nome: 'Netuno' },
  ];
  
  app.get('/planeta/:id', (req, res) =>{
    const id = parseInt(req.params.id);
  
    const planeta = planetas.find(planeta => planeta.id === id);
  
    if (planeta) {
      res.json(planeta);
    } else {
     res.status(404).json({ erro : 'Planeta não encontrado'});
    }
  });
  
  app.listen (3000, () =>{
    console.log('Servidor iniciado na porta 3000');
  });