const { where } = require("sequelize")
const Admin  = require("../model/admin")
 
const adminController = {
    create: async (request, response) => {
        try {
            // corpo da requisição o conteúdo para salvar no banco
            const { nome, email, senha } = request.body
 
            const adminCriado = await Admin.create({ nome, email, senha })
 
            // 200 -> OK
            // 201 -> Created
            return response.status(200).json({
                msg: 'O admin foi criado com sucesso',
                adminCriado
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
            const { nome, email, senha } = request.body;

            if (!nome || !email || !senha) {
                return response.status(400).json({
                    msg: "Campos faltando"
                })
            }

            const adminExiste = await Cliente.findByPk(id);

            if (!adminExiste) {
                return response.status(400).json({
                    msg: "Admin não encontrado"
                });
            }

            //após verificar os campos ID, vamos atualizar o cliente

            //UPDATE Cliente SET nome = {nome}, {email} WHERE id = {id}
            await Admin.update({
                nome, email, senha
            }, {
                where: {
                    id: id
                }
            });

            return response.status(200).json({
                msg: "Admin atualizado com sucesso"
            });

        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro ao atualizar o admin"
            })
        }
    },
    findAll: async (request, response) => {
        try {
            const admins = await Admin.findAll();

            //Validação para verificar se existe cliente no banco
            return response.status(200).json(admins);
        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao buscar todos os admins"
            })
        } 
    },
    delete: async (request, response) => {
        try {
        
            const { id } = request.params;

            
            const existeAdmin = await Admin.findByPk(id);
    
            if (!existeAdmin) {
                return response.status(400).json({
                    msg: "Cliente não encontrado"
                });
            }
            
            await Admin.destroy({
                where: {
                    id: id
                }
            });

            return response.status(200).json({
                msg: "Admin deletado com sucesso!"
            })

        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao deletar admin"
            });
        }
    },
    findById: async (request, response) => {
        try {
            const { id } = request.params;

            const adminEncontrado = await Admin.findByPk(id);

            if (!adminEncontrado) {
               
                return response.status(204).json({
                    msg: "Admin não encontrado"
                })
            }
        } catch (error) {
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao buscar um admin unico"
            })
        }
    }
}
 
module.exports = adminController