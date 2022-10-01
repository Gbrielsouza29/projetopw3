const Sequelize = require('sequelize');

const conexao = new Sequelize(
    'materiais_bd',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);
module.exports = conexao;