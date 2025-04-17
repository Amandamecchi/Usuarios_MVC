const UserModel = require('../models/UserModel');
const UserList = require('../models/UserList');
const User = require('../models/User'); // Adicionando a importação da classe User

const lista = new UserList();
lista.addUser(new User ('Amanda', 'amanda@gmail.com', '12'));


const router = {
    getAllUsers: (req, res) => {
        res.json(lista.getAllUsers());
    },

    getUserById: (req, res) => {
        try {
            res.json(lista.getUserById(req.params.id));
        } catch (error) {
            res.status(404).json({ message: "Usuário não encontrado", error });
        }
    },

    addUser: (req, res) => {
        try {
            const { nome, email, senha } = req.body;
            if (!nome || !email || !senha === undefined) {
                throw new Error("Todos os campos são obrigatórios");
            }
            const newUser = new User(nome, email, senha);
            lista.addUser(newUser);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message, error });
        }
    },

    updateUser: (req, res) => {
        try {
            res.status(200).json(lista.updateUser(req.params.id, req.body));
        } catch (error) {
            res.status(400).json({ message: "Não foi possível atualizar o usuário" });
        }
    },


    deleteUser: (req, res) => {
        lista.deleteUser(req.params.id);
        res.status(200).json({ message: "Usuário deletado com sucesso", IdDeletado: req.params.id });
    },
    getPostByUserId: (req, res) => {
        try {
            const userId = req.params.id;
            res.status(200).json({ message: "Post encontrado com sucesso", IdDeletado: req.params.id });
        } catch (error) {
            res.status(404).json({ message: "Post não encontrado", error });
        }
    }
};

module.exports = router;

/*
//const getAllUsers = async (req, res) => {
 //   try {
  //      const users = await UserModel.getUsers();
 //           res.json(users),
       
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar usuários" });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.getUserById(id);
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar usuário" });
    }
}

const createUser = async (req, res) => {
try {
    const { name, email, password } = req.body;
    const photo = req.file ? req.file.filename : null;
    const user = await UserModel.createUser({ nome, email, senha, photo });
    res.status(201).json(user);
} catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário" });
}
};

const deleteUser = async (req, res) => {
    try {
        const result = await UserModel.deleteUser(req.params.id);
        if (result.error){

            return res.status(404).json({ message: result.error });
        }
        res.json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
        console.error('erro:', error);
        res.status(500).json({ message: "Erro ao deletar usuário" });
    }
};

const updateUser = async (req, res) => {
    try {
        const user =await UserModel.updateUser(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        res.status(200).json(user);
    } catch (error) {
       res.status(500).json({ message: "Erro ao atualizar usuário" }); 
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
};
*/

