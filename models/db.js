const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize(
    'postdb',
     process.env.USER_DB, 
     process.env.PASSWORD_DB,
    {
        host: 'localhost',
        dialect: 'mysql',
        query: { raw: true }
    })

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}