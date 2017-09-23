const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser')

const port = '3001'

// routes
const laVanguardia = require('./routes/laVanguardia/')


app.use(express.static(path.join(process.cwd(), 'client')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use('/api/laVanguardia', laVanguardia)




app.listen(port)

console.log(`Scrapping in port ${port}`)
