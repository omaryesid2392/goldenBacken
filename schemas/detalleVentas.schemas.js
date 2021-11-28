const mongoose = require ('mongoose');
const { Schema } = mongoose;

const productoDetalle = new Schema({
	nombre: {type:String, required:true},
	valorVenta: {type:Number, required:true},
	cantidad: {type:Number, required: true}
});

const venta = new Schema({
	idUsersCliente: { type: String, required: true },
	idUsersEmployee: { type: String, required: true },
	products : [productoDetalle],
	fecha : { type: Date, required: true },
	total : { type: Number, required: true },
});

module.exports = mongoose.model('Venta', venta);