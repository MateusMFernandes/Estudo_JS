const express = require('express');
const app = express();

let data = new Date();

let ano_nascimento = 1991;
let ano_atual = data.getFullYear();

let idade = ano_atual - ano_nascimento;

let idade_json = {idade:idade};

app.get('/', (req, res) => {
    res.json(idade_json);
});

app.listen(8080, () => {
   console.log("Servidor iniciado");
});
