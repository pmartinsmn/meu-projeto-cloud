const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Meu projeto Cloud 25/10</h1><p>Aplicação feita por mim.</p>');
});

app.get('/sobre', (req, res) => {
  res.send('<h1>Sobre</h1><p>Esta é a página sobre o projeto.</p>');
});

app.get('/contato', (req, res) => {
  res.send('<h1>Contato</h1><p>Entre em contato pelo exemplo@email.com.</p>');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Aplicação rodando na porta ${PORT}`);
});