const db = require('./db')

const User = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    cidade: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    }
})

// User.sync({ force: true })

module.exports = User 