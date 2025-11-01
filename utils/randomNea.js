const neaDex = require('./pokenea')

function getRandomNea() {
    const randomIndex = Math.floor(Math.random() * neaDex.length)
    const nea = neaDex[randomIndex]
    return nea
}

module.exports = { getRandomNea }