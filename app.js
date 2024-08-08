const express = require('express');
const app = express();
const PORT = 3000;
const books = require('./data.json');

app.set('view engine', 'ejs');
app.set('json spaces', 2);

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const book = books.find(b => b.id === bookId);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send({ error: 'Book not found' });
    }
});

app.get('/ejs/books', (req, res) => {
    res.render('books', { books });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
