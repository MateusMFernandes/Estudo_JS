const express = require('express');
const app = express();

function agendaMensagem(agenda) {
  
if(agenda == 1){
    	return "Hoje vou jogar vídeo game";
  } else if (agenda == 0){
    	return "Hoje vou assistir um filme";
  } else{
    	return "Hoje vou dormir";
  }
}

app.get('/agenda', (req, res) => {
  const agenda = parseInt(req.query.agenda);
  const msg = agendaMensagem(agenda);
  res.json({mensagem: msg});
});

app.listen(8080, () => {
  console.log('Servidor node iniciado em: ' + new Date());
});