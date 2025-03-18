import { Sequelize } from "sequelize";
 
const sequelize = new Sequelize(
    "sesi-rest", // Nome do banco
    "root", // Usuário do banco
    "root", // Senha do banco
    {
        host: 'localhost', // Host do banco
        port: 3360, // MySQL
        dialect: 'mysql',
        logging: false
    }
)
 
sequelize.authenticate()
    .then(() => {
        console.log("Conexão estabelecida com sucesso MYSQL")
    })
    .catch((err) => {
        console.error("Não foi possivel se conectar ao MYSQL")
    })
 
    module.exports = sequelize;