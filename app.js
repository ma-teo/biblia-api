const express = require('express')
const cors = require('cors')
const variables = require('../data/variables.json')
const data = [
  require('../data/EIB.json'),
  require('../data/UBG.json'),
  require('../data/BW.json'),
  require('../data/KJV.json'),
  require('../data/BBE.json'),
]

const app = express()

app.use(cors())

app.get('/', (req, res) => res.json(variables))
app.get('/:bible', ({params}, res) => res.json(data[params.bible]))
app.get('/:bible/:book', ({params}, res) => res.json(data[params.bible][params.book]))
app.get('/:bible/:book/:chapter', ({params}, res) => res.json(data[params.bible][params.book][params.chapter]))

app.listen(3000)
