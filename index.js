const express = require('express')
const app = express();
const cors = require('cors');
const tasksService = require('./tasks');
const bodyParser = require('body-parser')
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/tasks', (req, res) => {
  res.send(JSON.stringify(tasksService.getTasks()));
})

app.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send(JSON.stringify(tasksService.getTask(id)));
});

app.post('/tasks', (req, res) => {
    const task = req.body;
    tasksService.addTask(task);
    res.send('ok');
});

app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = req.body;
    tasksService.updateTask(id, task);
    res.send('ok');
});

app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasksService.removeTask(id);
    res.send('ok');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})