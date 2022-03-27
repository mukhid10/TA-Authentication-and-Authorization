const express = require("express")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")
const app = express()
const port = process.env.port || 4000

app.use(bodyParser.json())

const books = [
    {
      "author": "Robert Martin",
      "country": "USA",
      "language": "English",
      "pages": 209,
      "title": "Clean Code",
      "year": 2008
    },
    {
      "author": "Dave Thomas & Andy Hunt",
      "country": "USA",
      "language": "English",
      "pages": 784,
      "title": "The Pragmatic Programmer",
      "year": 1999
    },
    {
      "author": "Kathy Sierra, Bert Bates",
      "country": "USA",
      "language": "English",
      "pages": 928,
      "title": "Head First Java",
      "year": 2003
    },
    ];

    app.get('/books', (req, res)=>{
        res.send({
            status: true,
            data: books,
            method: req.method,
            url: req.url
        })
    })

    app.post('/books', (req, res)=>{
        books.push(req.body)
        res.send({
            status: true,
            message: 'data berhasil di simpan',
            method: req.method,
            url: req.url
        })
    })

    app.listen(port, ()=>{
        console.log(`server is okey ${port}`);
    })

