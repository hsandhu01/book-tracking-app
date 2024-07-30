#!/bin/bash

# Create backend directory and initialize Node.js project
mkdir backend
cd backend
npm init -y

# Install dependencies
npm install express mongoose cors

# Create server file
cat <<EOL > index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/booktracker', { useNewUrlParser: true, useUnifiedTopology: true });

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  pages: Number,
  timeSpent: Number,
  date: Date,
});

const Book = mongoose.model('Book', bookSchema);

app.post('/books', async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.status(201).send(newBook);
});

app.get('/books', async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

app.listen(port, () => {
  console.log(\`Server is running on port \${port}\`);
});
EOL

echo "Backend setup complete. To start the backend server, run: cd backend && node index.js"