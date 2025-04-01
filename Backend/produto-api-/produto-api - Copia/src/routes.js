const express = require('express')
const { PrismaClient } = require("@prisma/client")
const router = express.Router()
const prisma = new PrismaClient()

// Criar produto
router.post('/produto', async (req, res) => {
    // Pegando as infos passadas no corpo da requisição
    const { name, price, description, ingredients, imgUrl } = req.body

    // Salvando o produto
    const produto = await prisma.produto.create({
        data: { name, price: parseFloat(price), imgUrl, description, ingredients }
    })

    // Status 201 = created
    return res.status(201).json(produto);
})

// Buscar produto por id 
router.get("/produto/:id", async (req, res) => {
    // Pegando o id da url
    const { id } = req.params

    // Buscando produto por id
    const produto = await prisma.produto.findUnique({
        where: { id: Number(id) }
    })

    if (!produto) {
        // Status 404 = não encontrado (not found)
        return res.status(404).json({ error: "Produto não encontrado" })
    }

    return res.status(200).json(produto)
})

// Listar todos os produtos
router.get("/produto", async (req, res) => {
    //Buscar os produtos no banco
    const produtos = await prisma.produto.findMany()

    return res.json(produtos)
})

// Atualizar produto
router.put("./produto/:id", async (req, res) => {
    const { id } = req.params
    const { name, description, imgUrl, price, ingredients } = req.body

    const produto = await prisma.produto.update({
        where: { id: Number(id) },
        data: { name, price: parseFloat(price), description, imgUrl, ingredients }
    })

    return res.json(produto)
})

router.post("/user/register", async (req, res) => {
    // Recebe os dados do corpo da requisição
    const { name, email, password } = req.body

    const userExist = await prisma.usuario.findUnique({
        where: { email }
    })

    if (userExist) {
        return res.status(400).json({
            error: "E-mail já cadastrado"
        })
    }

    // criar usuario 
    const user = await prisma.usuario.create({
        data: {
            name,
            email,
            password
        }
    })

    return res.status(201).json(user)
})

router.put("/user/update/:id", async (req, res) => {
    const { id } = req.params
    const { name, password } = req.body

    // Buscando o usuario no banco de dados para verifica seexiste
    const user = await prisma.usuario.findUnique({ where: { id: Number(id) } })

    if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" })
    }

    const updateUser = await prisma.usuario.update({
        where: { id: Number(id) },
        data: {
            name,
            password
        }
    })
    return res.status(200).json(updateUser)
})

router.post("/user/login", async (req, res) => {
    const { email, password } = req.body

    const user = await prisma.usuario.findUnique({
        where: { email }
    })

    if(!user) {
        return res.status(400).json({ error: "E-mail ou senha incorretos" })
    }

    if(password != user.password) {
        return res.status(400).json({ error: "E-mail ou senha incorretos" })
    }

    return res.json({ message: "Login bem-sucedido!" })
})

router.post("/pedido", async (req, res) => {
    const {userId, itens} = req.body

    if(!itens || itens.length === 0){
        return res.status(400).json({error: "O pedido precisa ter ao menos um item"})
    }

    let totalPedido = 0
    const itensFormatados = []

    for(const item of itens) {
        // Calculando o preço de cada item
        const totalItem = parseFloat(item.price * item.quantidade)
        // Somando os valores do item na variavel do total do pedido
        totalPedido = totalItem + totalPedido

        itensFormatados.push({
            name: item.name, 
            imgUrl: item.imgUrl,
            price: parseFloat(item.price),
            description: item.description, 
            ingredients: item.ingredients,
            quantidade: item.quantidade,
            produtoId: Number(item.produtoId)
        })
    }
        const pedido = await prisma.pedido.create({
            data: {
                userId: Number(userId), 
                total: totalPedido,
                itens: {
                    create: itensFormatados
                }
            },
            include: {itens: true, user: true}
        })
    return res.status(201).json(pedido)
})


module.exports = router