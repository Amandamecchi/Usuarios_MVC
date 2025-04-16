require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = express.Router();
const usersControllers = require("../controllers/usersControllers");
const upload = require('../config/upload');

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Gerenciamento de usuários
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get('/user', usersControllers.getAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Busca usuario por ID
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario não encontrado
 *       404:
 *         description: Usuuario não encontrado
 */
router.get('/user/:id', usersControllers.getUserById);




/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               house_id:
 *                 type: integer
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Ususario criado
 */
router.post('/', upload.single('photo'), usersControllers.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Deleta um usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario deletado
 */
router.delete('/user/:id', usersControllers.deleteUser);

/**
* @swagger
* /api/users/{id}:
*   put:
*     summary: Atualiza um usuario
*     tags: [Ususario]
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
*               house_id:
*                 type: integer
*     responses:
*       200:
*         description: Usuario atualizado
*/
router.put('/user/:id', usersControllers.updateUser);



//router.post('/user', usersControllers.addUser);
//router.get('/:id/posts', usersControllers.getPostsByUserId);

module.exports = router;