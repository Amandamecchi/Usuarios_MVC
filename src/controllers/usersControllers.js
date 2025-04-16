const User = require('../models/UserModel');
const UserList = require('../models/UserList');

const lista = new UserList();
lista.addUser(new User("Amanda", "amanda@gmail.com", 14));

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
            const { nome, email, age } = req.body;
            if (!nome || !email || age === undefined) {
                throw new Error("Todos os campos são obrigatórios");
            }
            const newUser = new User(nome, email, age);
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
            res.status(404).json({ message: "Erro ao atualizar o usuário", error });
        }
    },

    deleteUser: (req, res) => {
        lista.deleteUser(req.params.id);
        res.status(200).json({ message: "Usuário deletado com sucesso", IdDeletado: req.params.id });
    },

createUser: async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const photo = req.file ? req.file.filenome : null;
        const user = await User.createUsuarios({ nome, email, senha, photo });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar usuário", error });
    }
}

};

module.exports = {getAllUsers, getUserById, addUser, updateUser, deleteUser, createUser};