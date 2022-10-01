const Sequelize = require('sequelize');

const conexao = require('../database/database');

const categoria =conexao.define(
'categoria',
{
    codCategoria:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true 
    },
    nomeCategoria:{
        type: Sequelize.STRING,
        allowNull: false
    },
}
);

 // categoria.sync({force:true});

module.exports = categoria;