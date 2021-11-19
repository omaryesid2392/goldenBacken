const { Router} = require('express')
const router = Router();
const controller = require('../operations/productosController');

//router.get('/productos', controller.indexLogin);
router.get('/:id', 	controller.buscarProducto);
router.get('/', controller.buscarProductos);
router.post('/createproducto', controller.createProducto);
router.put('/actualizarproducto/:id', controller.updateProducto);
router.delete('/deleteproducto/:id', controller.deleteProducto);
module.exports = router