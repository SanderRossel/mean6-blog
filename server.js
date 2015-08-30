var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var books = [
    { title: 'Lord of the Rings', author: 'J.R.R. Tolkien' },
    { title: 'Harry Potter', author: 'J.K. Rowling' },
    { title: "The Hitchhiker's Guide to the Galaxy", author: 'Douglas Adams' }
];

app.use(bodyParser.json());
app.use(express.static('public'));

app.get(['/', '/index'], function (req, res) {
    res.sendFile(__dirname + '/public/ajax-example.html');
});

app.get('/books', function (req, res) {
    res.send(books);
});

app.post('/addBook', function (req, res) {
    var book = req.body;
    books.push(book);
    res.send(books);
});

var server = app.listen(80, '127.0.0.1');