const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(process.env.DBNAME || 'toughts', process.env.DBUSER || 'root', process.env.DBPASS || '', {
    host: process.env.DBHOST || 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso!')
} catch (err) {
    console(`Não foi possivel conectar ${err}`)
}

module.exports = sequelize