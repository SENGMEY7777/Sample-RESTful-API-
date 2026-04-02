const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/users', userController.getAll);
router.post('/users', userController.createUser)
router.get('/users/:id', userController.getMe);
router.put('/users/:id/active', userController.setActive);
router.put('/users/:id/inactive', userController.setInactive);
router.delete('/users/:id', userController.deleteUser);

module.exports = router; 