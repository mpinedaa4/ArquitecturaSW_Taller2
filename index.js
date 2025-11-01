const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const { getRandomNea } = require('./utils/randomNea')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    const randomNea = getRandomNea()
    const nea = {
        "id": randomNea.id,
        "nombre": randomNea.nombre,
        "altura": randomNea.altura,
        "habilidad": randomNea.habilidad,
        "containerId": ""
    }

    res.send(nea)
})

app.get('/nea-del-dia', (req, res) => {
    const randomNea = getRandomNea()
    const nea = {
        "imagen": randomNea.imagen,
        "frase": randomNea.frase,
        "containerId": ""
    }

    res.render('nea-del-dia', { nea })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})