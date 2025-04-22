const express = require("express");
const router = express.Router();
const upload = require('../config/upload');
const PostController = require("../controllers/postController");
const apiKeyMiddleware = require('../config/apiKey');

router.use(apiKeyMiddleware);


/**
 * @swagger
 * tags:
 *   name: Post
 *   description: Gerenciamento de Post
 */

/**
 * @swagger
 * /api/Post:
 *   get:
 *     summary: Lista todos os posts
 *     tags: [Post]
 *     responses:
 *       200:
 *         description: Lista de Post
 */
router.get('/', PostController.getAllPost);

/**
 * @swagger
 * /api/Post:
 *   post:
 *     summary: Cria um novo Post
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               user_id:
 *                 type: integer
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 user_id:
 *                   type: integer
 *                 photo:
 *                   type: string
 */
router.post('/', PostController.addPost);

/**
 * @swagger
 * /api/Post/{id}:
 *   get:
 *     summary: Busca posts por ID
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post encontrado
 *       404:
 *         description: Post não encontrado
 */
router.get('/:id', PostController.getPostById);

/**
 * @swagger
 * /api/Post/{id}:
 *   put:
 *     summary: Atualiza um post
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               user_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Post atualizado
 */
router.put('/:id', PostController.updatePost);

/**
 * @swagger
 * /api/Post/{id}:
 *   delete:
 *     summary: Deleta um Post
 *     tags: [Post]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post deletado
 */
router.delete('/:id', PostController.deletePost);

module.exports = router;