const express = require("express")
const cors = require("cors") // libera o acesso para a api
 
const app = express() // criando servidor express
const router = require("./src/router/router") // importar as rotas
 
const apiPort = 8080
 
app.use(express.json()) // utilizando json
app.use(cors())
 
// configurar as rotas
app.use("/api", router)
 
app.listen(apiPort, () => {
    console.log("API rodando com sucesso")
})
 