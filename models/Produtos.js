const db = require('./db')

const Produto = db.sequelize.define('produtos', {
    nome: {
        type: db.Sequelize.STRING
    },
    preco: {
        type: db.Sequelize.STRING
    },
    codigo: {
        type: db.Sequelize.STRING
    },
    quantidade: {
        type: db.Sequelize.STRING
    }
})

//Produto.sync({ force: true })

module.exports = Produto