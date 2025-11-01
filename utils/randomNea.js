const neaDex = require('./neadex')

function getRandomNea() {
    const randomIndex = Math.floor(Math.random() * neaDex.length)
    const nea = neaDex[randomIndex]
    return nea
}

module.exports = { getRandomNea }