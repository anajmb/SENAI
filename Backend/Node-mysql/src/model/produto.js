const { DataTypes } = require("sequelize")
const sequelize = require('../config/config')
 
const Produto = sequelize.define('produto', {
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique
    },
    preco:{
        type: DataTypes.STRING,
         allowNull: false,
    },
    quantidade:{
        type: DataTypes.INT,
        allowNull: false,
    }

    
} , {
    tableName: 'produtos',
    timeStamp: true // data e hora da criação e ultima atualização do objeto
 }
)
 
module.exports = Produto