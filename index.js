const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a contact
app.post('/contacts', async (req, res) => {
  try {
    const response = await axios.post('https://api.freshsales.io/api/contacts', req.body, {
      headers: {
        'Authorization': `Token token=${process.env.API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

// Retrieve a contact
app.get('/contacts/:id', async (req, res) => {
  try {
    const response = await axios.get(`https://api.freshsales.io/api/contacts/${req.params.id}`, {
      headers: {
        'Authorization': `Token token=${process.env.API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

// Update a contact
app.put('/contacts/:id', async (req, res) => {
  try {
    const response = await axios.put(`https://api.freshsales.io/api/contacts/${req.params.id}`, req.body, {
      headers: {
        'Authorization': `Token token=${process.env.API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

// Delete a contact
app.delete('/contacts/:id', async (req, res) => {
  try {
    const response = await axios.delete(`https://api.freshsales.io/api/contacts/${req.params.id}`, {
      headers: {
        'Authorization': `Token token=${process.env.API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
``
