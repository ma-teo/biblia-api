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
  const chapters = []
  const verses = []

  for (const book in data[bible]) {
    chapters.push(data[bible][book].length)
    verses.push([])

    for (const chapter of data[bible][book]) {
      verses[book].push(chapter.length)
    }
  }

  return {
    bible_ID: +bible,
    bible: variables.bibles[bible],
    books: variables.books,
    chapters: chapters,
    verses: verses
  }
}

const getBook = ({bible, book}) => {
  let chapters
  const verses = []

  for (const chapter of data[bible][book]) {
    chapters = data[bible][book].length
    verses.push(chapter.length)
  }

  return {
    bible_ID: +bible,
    bible: variables.bibles[bible],
    book_ID: +book,
    book: variables.books[book],
    chapters: chapters,
    verses: verses
  }
}

const getChapter = ({bible, book, chapter}) => {
  return {
    bible_ID: +bible,
    bible: variables.bibles[bible],
    book_ID: +book,
    book: variables.books[book],
    chapter_ID: +chapter,
    verses: data[bible][book][chapter]
  }
}

const getVerse = ({bible, book, chapter, verse}) => {
  return {
    bible_ID: +bible,
    bible: variables.bibles[bible],
    book_ID: +book,
    book: variables.books[book],
    chapter_ID: +chapter,
    verse_ID: +verse,
    verse: data[bible][book][chapter][verse]
  }
}

module.exports = {
  getVariables,
  getBible,
  getBook,
  getChapter,
  getVerse
}
