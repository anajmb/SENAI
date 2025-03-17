const productController = {
    create: async (req, res) => {
        try {
            const { nomeProduto, quantidade, preço} = req.body

            if(!nomeProduto || !quantidade || !preço) {
                return res.status(400).json({
                    msg: "Faltou enviar os campos"
                })
            }

            return res.status(201).json({
                msg: "Produto cadastrado com sucesso"
            })
        } catch (error) {
            return res.status(500).json({
                msg: "Deu erro no sistema"
            })
        }
    },
    delete: async(req, res) => {
        try {
            const {id} = req.params;

            if(!id) {
                return res.status(400).json({
                msg: "Pendente o id"
                })
            }
            return res.status(200).json({
                msg: "Produto deletado com sucesso"
            })
        } catch (error) {
            return res.status(500).json({
                msg: "Ocorreu um erro ao criar o produto"
            })
        }
    },
    update: async (req, res) => {
        try {
            const {id} = req.params;
            const {nomeProduto, quantidade, preço} = req.body;

            if(!id || !nomeProduto || !quantidade || !preço) {
                return res.status(400).json({
                    msg: "Pendente campos"
                })
            }
            return res.status(200).json({
                msg: "Produto atualizado com sucesso"
            })
        } catch (error) {
            return res.status(500).json({
                msg: "Ocorreu um erro interno"
            })
        }
    },
    getAll: async (req, res) => {
        try {
            return res.status(200).json({
                msg: "Produtos encontrados",
                produtos: []
            });
        } catch (error) {
            return res.status(500).json({
                msg: "Ocorreu um erro interno"
            })
        }
    }
}

module.exports = productController;