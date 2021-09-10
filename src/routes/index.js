const { Router } = require('express');
const router = Router();

const { home, getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/index.controller');

router.get('/', home);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;