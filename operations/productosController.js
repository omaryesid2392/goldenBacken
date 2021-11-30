const coleccionProductos = require('../schemas/productos.schema');

const productosController = {}

productosController.buscarProducto = async (req, res) => {
    console.log('buscar producto');
    const dato = await coleccionProductos.findById(req.params.id);
    res.json(dato);
}
productosController.buscarProductos = async function (req, res) {
    console.log('buscar productos');
    const datos = await coleccionProductos.find();
    res.json(datos);
}
productosController.createProducto = async (req, res) => {
    console.log('Nuevo productos');

    console.log(req.body);
    var producto = new coleccionProductos(req.body);
    console.log(producto);

    producto = await producto.save();
    res.json({ "status": "Producto guardado"});

}
productosController.updateProducto = async (req, res) => {
    console.log('update Producto')

    //res.render('updateProducto');
    const { id } = req.params;
    const producto = {
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        cantidad : req.body.cantidad,
        valorCompra: req.body.valorCompra,
        valorVenta: req.body.valorVenta,
    }
    console.log(producto)
    await coleccionProductos.findByIdAndUpdate(req.params.id, { $set: producto }, { new: true });
    res.json({ "status": "Dato de producto actualizado" });
}
productosController.deleteProducto = async (req, res) => {
   // res.send('delete Producto');
    console.log('delete Producto')
    await coleccionProductos.findByIdAndRemove(req.params.id);
    res.json({ "status": "Dato de producto borrado" });

}
module.exports = productosController;