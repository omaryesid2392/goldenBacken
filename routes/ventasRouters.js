const { Router} = require('express')
const router = Router();
const controller = require('../operations/ventasController');

router.get('/buscarventa', controller.buscarVenta);
router.post('/buscarventas', controller.buscarVentas);
router.post('/createventa', controller.createVenta);
module.exports = router