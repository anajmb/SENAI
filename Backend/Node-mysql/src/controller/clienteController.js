const { where } = require("sequelize")
const Cliente = require("../model/cliente")

const clienteController = {
    create: async (request, response) => {
        try {
            // corpo da requisição o conteúdo para salvar no banco
            const { nome, email } = request.body

            const clienteCriado = await Cliente.create({ nome, email })

            // 200 -> OK
            // 201 -> Created
            return response.status(200).json({
                msg: 'O cliente foi criado com sucesso',
                clienteCriado
            })

        } catch (error) {
            return response.status(500).json({
                msg: 'Ocorreu um erro ao acessar a api'
            })
        }
    },
    update: async (request, response) => {
        try {
            const { id } = request.params;
            const { nome, email } = request.body;

            if (!nome || !email) {
                return response.status(400).json({
                    msg: "Campos faltando"
                })
            }

            const clienteExiste = await Cliente.findByPk(id);

            if (!clienteExiste) {
                return response.status(400).json({
                    msg: "Cliente não encontrado"
                });
            }

            //após verificar os campos ID, vamos atualizar o cliente

            //UPDATE Cliente SET nome = {nome}, {email} WHERE id = {id}
            await Cliente.update({
                nome, email 
            }, {
                where: {
                    id: id
                }
            });

            return response.status(200).json({
                msg: "Cliente atualizado com sucesso"
            });

        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro ao atualizar cliente"
            })
        }
    },
    findAll: async (request, response) => {
        try {
            const clientes = await Cliente.findAll();

            //Validação para verificar se existe cliente no banco
            return response.status(200).json(clientes);
        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao buscar todos os clientes"
            })
        }
    },
    delete: async (request, response) => {
        try {
            // -> DELETE/cliente/{id}
            // {} = desestruturação para não precisar colocar cada item que nos queremos em linhas diferentes
            // const nome = request.body.nome; -> const {nome} = request.body
            const { id } = request.params;

            //Await é para que o node execute todo aquela linha antes de continuar
            const existeCliente = await Cliente.findByPk(id);
            // existe -> true 
            // não existe -> false
            // ! -> diferente de (usamos para booleanos) 
            if (!existeCliente) {
                return response.status(400).json({
                    msg: "Cliente não encontrado"
                });
            }
            // DELETE FROM Clientes WHERE id = id;
            await Cliente.destroy({
                where: {
                    id: id
                }
            });

            return response.status(200).json({
                msg: "Cliente deletado com sucesso!"
            })

        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao deletar cliente"
            });
        }
    },
    findById: async (request, response) => {
        try {
            // -> get/api/cliente/ {id}
            const { id } = request.params;

            const clienteEncontrado = await Cliente.findByPk(id);

            if (!clienteEncontrado) {
                // 204 -> NO CONTENT - Sem conteudo
                return response.status(204).json({
                    msg: "Cliente não encontrado"
                })
            }
        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao buscar um cliente unico"
            })
        }
    }
}

module.exports = clienteController