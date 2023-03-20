const Sequelize = require('sequelize')

const sequelize = new Sequelize('postdb', 'root', 'gv3155', {
    host: 'localhost',
    dialect: 'mysql',
    query: { raw: true }
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}