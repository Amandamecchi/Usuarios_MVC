const express = require("express");

const router = express.Router();

const usersControllers = require("../controllers/usersControllers");

router.get('/user', usersControllers.getAllUsers);
router.post('/user', usersControllers.addUser);
router.get('/user/:id', usersControllers.getUserById);
router.put('/user/:id', usersControllers.updateUser);
router.delete('/user/:id', usersControllers.deleteUser);

module.exports = router;