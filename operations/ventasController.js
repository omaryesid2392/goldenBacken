const ventasController = {}

ventasController.buscarVenta = async (req, res) => {
    console.log('buscar venta');
    
}
ventasController.buscarVentas = async (req, res) => {
    console.log('buscar ventas');
}
ventasController.createVenta = (req, res) => {
    res.send('create venta')

}
module.exports = ventasController;