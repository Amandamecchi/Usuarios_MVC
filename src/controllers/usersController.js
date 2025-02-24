const User = require("../models/User");
const UserList = require("../models/UserList");

const lista = new UserList();

lista.addUser(new User("Amanda", "amanda@gmail.com", 14));
lista.addUser(new User("Flavia", "flavia@gmail.com", 15));

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
            const {name, email, age} = req.body;
            if (!name || !email || age === undefined){
                throw new Error("Todos os campos são obrigatórios");
            }
            const newUser = new User(name, email, age);
            lista.addUser(newUser);
            res.status(201).json(newUser)
        } catch (error) {
            res.status(404).json({message: error.message, error});
        }
    },
    updateUser: (req, res) => {
        try {
            res.json(lista.updateUser(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({ message: " Erro ao atualizar", error});
        }
    },

    deleteUser: (req, res) => {
        lista.deleteUser(req.params.id);
        res.status(200).json({ message: "Ususário deletado com sucesso", idDeletado: req.params.id});
    }
};

module.exports = router;
