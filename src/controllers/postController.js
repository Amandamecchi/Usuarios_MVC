const PostList = require('../models/PostList'); 
const Post = require('../models/Post');

const lista = new PostList(); 

const post1 = new Post("https://picsum.photos/200/300", 10, 2, 3);
lista.addPost(post1);

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
            if (!imagem || !likes === undefined || comentarios === undefined) {
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
        res.status(200).json(lista.updatePost(req.params.id, req.body));
        } catch (error) {
            res.status(400).json({ message: "Não foi possível atualizar o post" });
        }
    },
    

    deletePost: (req, res) => {
        lista.deletePost(req.params.id);
        res.status(200).json({ message: "Usuário deletado com sucesso", IdDeletado: req.params.id });
    }
};

module.exports = router;