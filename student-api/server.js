const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Constant API key (shared with client)
const API_KEY = '1234567890abcdef';

app.use(express.json());

// Serve static HTML, CSS, JS from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to validate API key (for API routes only)
app.use('/students', (req, res, next) => {
  const keyFromHeader = req.headers['x-api-key'];
  const keyFromQuery = req.query.apiKey;

  if (keyFromHeader === API_KEY || keyFromQuery === API_KEY) {
    next(); // Authorized
  } else {
    res.status(401).json({ error: 'Unauthorized. Invalid API key.' });
  }
});

// In-memory data store
let students = [];

// POST - Add new student
app.post('/students', (req, res) => {
  const student = req.body;
  students.push(student);
  res.status(201).json({ message: 'Student added', data: student });
});

// GET - Retrieve all students
app.get('/students', (req, res) => {
  res.json(students);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
