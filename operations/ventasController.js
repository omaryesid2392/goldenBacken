const coleccionVentas = require('../schemas/detalleVentas.schemas');

const ventasController = {}


ventasController.buscarVenta = async (req, res) => {
    console.log('buscar Venta');
    const dato = await coleccionVentas.findById(req.params.id);
    res.json(dato);
    
}
ventasController.buscarVentas = async (req, res) => {
    console.log('buscar ventas');
    const datos = await coleccionVentas.find();
    res.json(datos);
}
ventasController.updateVenta = async (req, res) => {
    console.log('update Venta')
    const { id } = req.params;
    const venta = {
    idUsersCliente: req.body.idUsersCliente,
	idUsersEmployee: req.body.idUsersEmployee,
	products : req.body.products,
	fecha : req.body.fecha,
	total : req.body.total,
    }
    console.log(venta)
    await coleccionVentas.findByIdAndUpdate(req.params.id, { $set: venta }, { new: true });
    res.json({ "status": "Dato de venta actualizado", venta});

}
ventasController.createVenta = async (req, res) => {
    const venta = new coleccionVentas(req.body);
    console.log(venta);
    await venta.save();
    res.json({ "status": "Venta Registrada",venta});

}
module.exports = ventasController;