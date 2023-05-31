const express = require('express')
const router = express.Router()
const Produto = require('../models/Produtos');
const { json } = require('sequelize');

router.get('/produtos', async (req, res) => {
    try {
        const users = await Produto.findAll()
        res.status(200).json(users)


    }
    catch (error) {
        res.status(500).send(error.message)
    }
});

router.post('/create', async (req, res) => {
    try {
        const newProd = await Produto.create({
            nome: req.body.nome,
            preco: req.body.preco,
            codigo: req.body.codigo,
            quantidade: req.body.quantidade
        })
        res.status(200).json(newProd)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
});

router.delete('/prod/:id', async (req, res) => {
    try {
        const id = req.params.id
        const deletProd = await User.destroy({
            where: { id: id }
        })
        res.status(200).json(deletProd)
    }
    catch (err) {
        res.status(500).send(err)
    }
});

router.patch('/prod/:id', async (req, res) => {
    try {
        const id = req.params.id
        const editProd = await User.update(
            { were: { id: id } }
        )
        res.status(200).json(editProd)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router