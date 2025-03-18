const { DataTypes } = require("sequelize")
const sequelize = require('../config/config')
 
const Cliente = sequelize.define('Cliente', {
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
         allowNull: false,
         unique: true //definindo email como unico
    }
} , {
    tableName: 'clientes',
    timeStamp: true // data e hora da criação e ultima atualização do objeto
 }
)
 
module.exports= Cliente