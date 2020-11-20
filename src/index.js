const express = require('express')
const cors = require('cors')
const variables = require('../../data/variables.json')
const data = [
  require('../../data/EIB.json'),
  require('../../data/UBG.json'),
  require('../../data/BW.json'),
  require('../../data/KJV.json'),
  require('../../data/BBE.json'),
]

express()
  .use(cors())
  .get('/', (req, res) => res.json(variables))
  .get('/:bible', ({params}, res) => res.json(data[params.bible]))
  .get('/:bible/:book', ({params}, res) => res.json(data[params.bible][params.book]))
  .get('/:bible/:book/:chapter', ({params}, res) => res.json(data[params.bible][params.book][params.chapter]))
  .get('/:bible/:book/:chapter/:verse', ({params}, res) => res.json(data[params.bible][params.book][params.chapter][params.verse]))
  .listen(3000)
