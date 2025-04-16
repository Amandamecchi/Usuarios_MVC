const UserModel = require('../models/UserModel');


const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.getUsers();
            res.json(users),
       
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

