const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const todos = [
    {id: 1, task:"1,81m"},
    {id: 2, task:"1,68m"},
];

app.post('/usuario', (req, res) => {
    const newTudo = req.body;
    todos.push(newTudo);
    res.status(201).json(newTudo);
});

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.get('/login', (req, res) => {
    res.send('Usuário:');
});

app.put('/todos/:id', (req,res) => {
    const idToUpdate = parseInt(req.params.id);
    const updateTask = req.body;

    const index = todos.findIndex(todo => todo.id === idToUpdate);

    if(index !== -1) {
        todos[index] = updatedTask;
        res.json(updatedTask);
    } else {
        res.status(404).json({error:"Usuário não encontrado"});
    }
});

app.delete('todos/:id', (req, res) => {
    const idToDelete = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === idToDelete);

    if(index !== -1) {
        todos.splice(index, 1);
        res.sendStatus(204)
    } else {
        res.status(404).json({ error: 'Usuário não encontrado'});
    }
});

app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`);
});

