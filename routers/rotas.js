const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)

    }
    catch (error) {
        res.status(500).send(error.message)
    }
});

router.post('/create', async (req, res) => {
    try {
        const newUser = await User.create({
            nome: req.body.nome,
            email: req.body.email,
            cidade: req.body.cidade,
            cpf: req.body.cpf
        })
        res.status(200).json(newUser)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
});

router.delete('/user/:id', async (req, res) => {
    try {
        const id = req.params.id
        const deletUser = await User.destroy({
            where: {id: id}
        })
        res.status(200).json(deletUser)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router