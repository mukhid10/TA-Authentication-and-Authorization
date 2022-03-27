const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express()
const port = 3000
app.use(bodyParser.json())


const users = [
    {
        username: 'terra',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'dave',
        password: 'password123member',
        role: 'member'
    }
  ];

const JWTScreet= 'tralalatrilili'

//SOal no-1

app.post('/login', (req, res)=>{
    const {username, password, role} = req.body

    const user = users.filter((user)=>{
        return user.username === username && user.password === password
    })

    if(user){
        const accessToken = jwt.sign(
            {username: user.username}, JWTScreet
        );
        res.json({
            accessToken
        })
    }else{
        res.send('email atau Password salah')
    }
})

//Soal no-2

app.get('/', (req, res)=>{
    res.send(books)
})

app.listen(port, ()=>{
    console.log(`Server Ok ${port}`);
})