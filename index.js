const express = require('express');

const server = express();

server.use(express.json());

const materias = ['Português', 'Matematica', 'Historia', 'Geografia', 'English']


// Retorna uma matéria
server.get('/materias/:index', (req, res) => {
  const { index } = req.params;

  return res.json(materias[index]);

});

// Retornar todos os cursos
server.get('/materias/', (req, res) => {
    return res.json(materias);
});

// Adicionar uma nova matéria
server.post('/materias', (req, res) => {
    const { name } = req.body;
    materias.push(name);

    return res.json(materias);

});

// Atualizar curso
server.put('/materias/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    materias[index] = name;

    res.json(materias);
});

// Deletar uma materia
server.delete('/materias/:index', (req, res) => {
    const { index } = req.params;

    materias.splice(index, 1);
    return res.json({ message: "O curso foi deletado"});
});



server.listen(3010);
