const Post = require('../models/Post');
const PostList = require('../models/PostList');

const lista = new PostList();
lista.addPost(new Post("imagem", 32, "hahaha"));
lista.addPost(new Post("imagem", 12, "hehehe"));

const router = {
    getAllPost: (req, res) => {
        res.json(lista.getAllPost());
    },

    getPostById: (req, res) => {
        try {
            res.json(lista.getPostById(req.params.id));
        } catch (error) {
            res.status(404).json({ message: "Post não encontrado", error });
        }
    },

    addPost: (req, res) => {
        try {
            const { imagem, likes, comentarios } = req.body;
            if (!imagem || !likes === undefined || comentarios) {
                throw new Error("Todos os campos são obrigatórios");
            }
            const newPost = new Post(imagem, likes, comentarios);
            lista.addPost(newPost);
            res.status(201).json(newPost);
        } catch (error) {
            res.status(400).json({ message: error.message, error });
        }
    },

    updatePost: (req, res) => {
        try {
            res.json(lista.updatePost(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({ message: "Erro ao atualizar o usuário", error });
        }
    },

    deletePost: (req, res) => {
        lista.deletePost(req.params.id);
        res.status(200).json({ message: "Usuário deletado com sucesso", IdDeletado: req.params.id });
    }
};

module.exports = router;