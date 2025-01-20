
const express = require('express')
const app = express()
const port = 3001

app.post('/login', (req, res)=>{
    res.send('this is a new server on route 1')
})

app.post('/signup', (req, res)=>{
    res.send(`
        html>
        <h1>this is a webpage</h1>
        </>`)
       })

app.get('/Questions', (req, res)=>{
res.send(`
    html>
    <h1>this is a webpage</h1>
    </>`)
    })

app.listen(port, ()=>{
    console.log(`Express-backend-app listening on port ${port}`)
})

