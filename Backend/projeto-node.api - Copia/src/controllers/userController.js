const userController = {
    create: async (req, res) => {
        try {
            const { nome, senha} = req.body;

            if(!nome || !senha) { // ! pra saber se está preenchido
                return res.status(400).json ({
                    msg: "Faltou enviar os campos"
                })
             }

             // Salvamos no banco..

             // 201 - created
             return res.status(201).json({
                msg: "Usuario criado com suucesso"
             })
        } catch (error) {
            return res.status(500).json({
                msg: "Deu erro no sistema"
            })
        }
    },
    delete: async (req, res) => {
        try {
            const { id} = req.params;

            if (!id) {
                return res.status(400).json({
                    msg: "Pendente o id"
                })
            }
            // Deletar o usuario
            return res.status(200).json({
                msg: "Usuario deletado com sucesso"
            })
        } catch (error) {
            return res.status(500).json({
                msg: "Ocorreu um erro ao criar o User"
            })
        }
    },
    update: async (req, res) => {
        try {
            const {id} = req.params;
            const {nome, senha } = req.body;

            if(!id || !nome || !senha) {
                return res.status(400).json({
                    msg: "Pendente campos"
                })
            }

            // Atualizar usuario 
            return res.status(200).json({
                msg: " Usuario atualizado com sucesso"
            })
        } catch (error) {
            return res.status(500).json({
                msg: "Ocorreu um erro interno"
            })
        }
    },
    getAll: async (req, res) => {
        try {
            // Busca dos usuarios
            return res.status(200).json({
                msg: "Usuarios encontrados",
                usuarios: []
            });
        } catch (error) {
            return res.status(500).json({
                msg: "Ocorreu um erro interno"
            })
        }
    }
}

module.exports = userController;