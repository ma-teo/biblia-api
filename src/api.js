const { getVariables, getBible, getBook, getChapter, getVerse } = require('./data')

const getData = async ({params}, res) => {
  try {
    const data =
      params.verse ? getVerse(params) :
      params.chapter ? getChapter(params) :
      params.book ? getBook(params) :
      params.bible ? getBible(params) :
      getVariables()

    res.json(data)
  }
  catch {
    res.status(404).end()
  }
}

module.exports = {
  getData
}
