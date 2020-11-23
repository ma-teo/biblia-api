const variables = require('../../data/variables.json')
const data = [
  require('../../data/EIB.json'),
  require('../../data/UBG.json'),
  require('../../data/BW.json'),
  require('../../data/KJV.json'),
  require('../../data/BBE.json')
]

const getVariables = () => {
  return variables
}

const getBible = ({bible}) => {
  const list = []

  for (const book in data[bible]) {
    list.push([])

    for (const chapter of data[bible][book]) {
      list[book].push(chapter.length)
    }
  }

  return list
}

const getBook = ({bible, book}) => {
  const list = []

  for (const chapter of data[bible][book]) {
    list.push(chapter.length)
  }

  return list
}

const getChapter = ({bible, book, chapter}) => {
  return data[bible][book][chapter]
}

const getVerse = ({bible, book, chapter, verse}) => {
  return data[bible][book][chapter][verse]
}

module.exports = {
  getVariables,
  getBible,
  getBook,
  getChapter,
  getVerse
}
