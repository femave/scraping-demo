const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser')

const port = NODE.env || '3001'

// routes
const laVanguardia = require('./routes/laVanguardia/')
const elPais = require('./routes/elPais/')
const omicrono = require('./routes/omicrono/')
const elAndroideLibre = require('./routes/elAndroideLibre/')
const genbeta = require('./routes/genbeta/')

// midlewares
const webToParse = require('./routes/midleware/webToParse')


app.use(express.static(path.join(process.cwd(), 'client')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use('/api/lavanguardia', webToParse, laVanguardia)
app.use('/api/elpais', webToParse, elPais)
app.use('/api/omicrono', webToParse, omicrono)
app.use('/api/elandroidelibre', webToParse, elAndroideLibre)
app.use('/api/genbeta', webToParse, genbeta)




app.listen(port)

console.log(`Scrapping in port ${port}`)
