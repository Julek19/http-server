console.log("[+] serwer starting...");
const { application } = require('express');
const express = require('express')
const port = 80

const app = express()
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(port)