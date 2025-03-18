const { Router } = require("express")
const clienteController = require("../controller/clienteController")
const produtoController = require("../controller/produtoController")
const adminController = require("../controller/adminController")
 
const router = Router()
 
router.post("/cliente", (request, response) => {
    clienteController.create(request, response)
})
 
router.post("/produto", (request, response) => {
    produtoController.create(request, response)
})

router.post("/admin", (request, response) => {
    adminController.create(request, response)
})
 
module.exports = router