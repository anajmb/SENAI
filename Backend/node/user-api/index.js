const express = require('express')

const app = express()

// Listar para guarda os usuarios
let usuarios = []
let id = 1

//Midlaware para processar JSON
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello node")
})
app.post("/usuarios", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: "Email e name são obrigatorios" })
    }
    // Adicionando um usuário na lista de usuarios
    usuarios.push({ id, name, email })
    id++
    res.send()
})

app.get("/usuarios", (req, res) => {
    res.json(usuarios)
})
app.get("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const user = usuarios.find((user) => user.id == id)
    res.json(user)
})
app.delete("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id)
    usuarios = usuarios.filter((user) => user.id != id)
    res.json({mensage:"Usuário deletado com sucesso!"})
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})