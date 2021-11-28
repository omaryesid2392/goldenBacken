const { Router} = require('express')
const router = Router();
const controller = require('../operations/ventasController');

router.get('/buscarventa/:id', controller.buscarVenta);
router.get('/buscarventas', controller.buscarVentas);
router.post('/createventa', controller.createVenta);
router.put('/updateventas/:id', controller.updateVenta);
module.exports = router