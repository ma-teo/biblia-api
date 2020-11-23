const express = require('express')
const cors = require('cors')
const { getData } = require('./api')

express()
  .use(cors())

  .get('/', getData)
  .get('/:bible', getData)
  .get('/:bible/:book', getData)
  .get('/:bible/:book/:chapter', getData)
  .get('/:bible/:book/:chapter/:verse', getData)

  .listen(3000)
