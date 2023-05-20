const express = require('express')
const app = express()
const admin = require('./routers/rotas')

app.use(express.json())

app.use(admin)

app.listen(3001, function () {
    console.log('Servidor rodando na porta http://localhost:3001')
})