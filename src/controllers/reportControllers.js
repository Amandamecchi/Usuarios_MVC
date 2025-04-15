const PostModel = require('../models/postModel');

const getAllPosts = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("erro ao buscar posts", error);
        res.status(500).json({ error: 'ERROOO' });
    }
}

const getPostById = async (req, res) => {
    try {
       const post = await PostModel.findById(req.params.id); 
    } catch (error) {
        res.status(500).json({ error: 'ERROOO' });
    }
}