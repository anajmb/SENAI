const { where } = require("sequelize")
const Produto  = require("../model/produto")
 
const produtoController = {
    create: async (request, response) => {
        try {
            // corpo da requisição o conteúdo para salvar no banco
            const { nome, preco, quantidade } = request.body
 
            const produtoCriado = await Produto.create({ nome, preco, quantidade })
 
            // 200 -> OK
            // 201 -> Created
            return response.status(200).json({
                msg: 'O produto foi criado com sucesso',
                produtoCriado
            })
           
        } catch (error) {
            return response.status(500).json({
                msg: 'Ocorreu um erro ao acessar a api'
            })
        }
    },
    update: async (request, response) => {
        try {
            const {id} = request.params;
            const {nome, preco, quantidade} = request.body

            if (!nome || !preco || !quantidade) {
                return response.status(400).json({
                    msg: "Campos faltando"
                });
            }

            const produtoExiste = await Produto.findByPk(id);

            if (!produtoExiste) {
                return response.status(400).json({
                    msg: "Produto não encontrado"
                });
            }

            await Produto.update({
                nome, preco, quantidade
            }, {
                where: {
                    id: id
                }
            });

            return response.status(200).json({
                msg: "Produto atualizado com sucesso"
            });

        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro ao atualizar o produto"
            })
        }
    },
    findAll: async (request, response) => {
        try {
           const produtos = await Produto.findAll(); 

           return response.status(200).json(produtos);
        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao buscar todos os produtos"
            })
        }
    },
    delete: async (request, response) => {
        try {
            const {id} = request.params;

            const existeProduto = await Produto.findByPk(id);

            if (!existeProduto) {
                return response.status(400).json({
                    msg: "Produto não encontrado"
                });
            }

            await Produto.destroy({
                where: {
                    id: id
                }
            });

            return response.status(200).json({
                msg: "Produto deletado com sucesso!"
            })

        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao deletar produto"
            });
        }
    },
    findById: async (request, response) => {
        try {
            const { id } = request.params; 

            const produtoEncontrado = await Produto.findByPk(id);

            if (!produtoEncontrado) {
                return response.status(204).json({
                    msg: "Produto não encontrado"
                })
            }
        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao buscar um produto unico"
            }) 
        }
    }
}
 
module.exports = produtoController