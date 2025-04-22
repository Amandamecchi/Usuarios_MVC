const express = require("express");
const router = express.Router();
const upload = require('../config/upload');
const usersController = require("../controllers/usersController");
const apiKeyMiddleware = require('../config/apiKey');

router.use(apiKeyMiddleware);


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de Users
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de Users
 */
router.get('/user', usersController.getAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Busca usuários por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário não encontrado
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/user/:id', usersController.getUserById);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
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
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 * 
 *                 name:
 *                   type: string
 *                 user_id:
 *                   type: integer
 *                 photo:
 *                   type: string
 */

router.post('/', usersController.addUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Deleta um usuário
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário deletado
 */
router.delete('/user/:id', usersController.deleteUser);

/**
* @swagger
* /api/users/{id}:
*   put:
*     summary: Atualiza um usuario
*     tags: [Users]
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
*         description: Usuario atualizado
*/
router.put('/user/:id', usersController.updateUser);

module.exports = router;