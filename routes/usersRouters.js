const { Router} = require('express')
const router = Router();
const controller = require('../operations/usersController');

router.get('/buscaruser', controller.buscarUser);
router.post('/buscarusers', controller.buscarUsers);
router.post('/updateuser', controller.updateUser);
router.post('/createuser', controller.createUser);
router.post('/login', controller.login);
module.exports = router