const express = require('express');
const app = express();
app.use(express.json());

let data = [];

app.get('/api/data', (req, res) => {
    res.send(data);
});

app.post('/api/data', (req, res) => {
    data.push(req.body);
    res.send(req.body);
});

app.put('/api/data/:id', (req, res) => {
    const id = req.params.id;
    const item = data.find(i => i.id === id);
    if (item) {
        Object.assign(item, req.body);
        res.send(item);
    } else {
        res.status(404).send();
    }
});

app.delete('/api/data/:id', (req, res) => {
    const id = req.params.id;
    const index = data.findIndex(i => i.id === id);
    if (index !== -1) {
        data.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));