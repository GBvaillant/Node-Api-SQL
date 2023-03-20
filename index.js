const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const User = require('./models/User')

//BodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//handlebars 
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')


//rotas

app.get('/register', function (req, res) {
    res.render('form')
})

app.get('/base', function (req, res) {
    User.findAll({ order: [['id', 'DESC']] }).then(function (users) {
        res.render('home', { users: users })
    })

})

app.post('/create', function (req, res) {
    User.create({
        nome: req.body.nome,
        email: req.body.email,
        cidade: req.body.cidade,
        cpf: req.body.cpf
    }).then(function () {
        res.redirect('/base')
    }).catch(function (erro) {
        res.send('houve um erro' + erro)
    })
})

app.get('/deletar/:id', function (req, res) {
    User.destroy({ where: { 'id': req.params.id } }).then(function () {
        res.send('Usuario deletado com sucesso !!!')
    }).catch(function (erro) {
        res.send('Usuario não exite!!')
    })
})



app.listen(3001, function () {
    console.log('Servidor rodando na porta http://localhost:3001')
})