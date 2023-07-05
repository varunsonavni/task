// Import the express module
const express = require('express');

// Create a new express application
const app = express();

// Enable parsing of JSON data in the request body
app.use(express.json());

// Initialize an empty array to store data
let data = [];

// Handle GET requests to the /api/data endpoint
app.get('/api/data', (req, res) => {
    // Send the data array as the response
    res.send(data);
});

// Handle POST requests to the /api/data endpoint
app.post('/api/data', (req, res) => {
    // Add the request body to the data array
    data.push(req.body);
    // Send the request body as the response
    res.send(req.body);
});

// Handle PUT requests to the /api/data/:id endpoint
app.put('/api/data/:id', (req, res) => {
    // Get the id parameter from the request URL
    const id = req.params.id;
    // Find the item with the corresponding id in the data array
    const item = data.find(i => i.id === id);
    // If the item exists, update it with the request body and send it as the response
    if (item) {
        Object.assign(item, req.body);
        res.send(item);
    } else {
        // If the item doesn't exist, send a 404 error
        res.status(404).send();
    }
});

// Handle DELETE requests to the /api/data/:id endpoint
app.delete('/api/data/:id', (req, res) => {
    // Get the id parameter from the request URL
    const id = req.params.id;
    // Find the index of the item with the corresponding id in the data array
    const index = data.findIndex(i => i.id === id);
    // If the item exists, remove it from the data array and send a 204 (No Content) response
    if (index !== -1) {
        data.splice(index, 1);
        res.status(204).send();
    } else {
        // If the item doesn't exist, send a 404 error
        res.status(404).send();
    }
});

// Start the express server and listen on port 3000
app.listen(3000, () => console.log('Server running on port 3000..'));