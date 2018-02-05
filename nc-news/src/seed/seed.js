const { ref } = require('../firebase')
const articles = require('./articleSeed.js')
const config = require('../config/config')


articles.map(article => ref.push(article))
