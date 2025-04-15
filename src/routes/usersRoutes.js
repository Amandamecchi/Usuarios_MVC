require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = express.Router();

const usersControllers = require("../controllers/usersControllers");
//const setupSwagger = require('./src/config/swagger'); 
//const path = require("path");


router.get('/user', usersControllers.getAllUsers);
router.post('/user', usersControllers.addUser);
router.get('/user/:id', usersControllers.getUserById);
router.put('/user/:id', usersControllers.updateUser);
router.delete('/user/:id', usersControllers.deleteUser);
//router.get('/:id/posts', usersControllers.getPostsByUserId);

module.exports = router;