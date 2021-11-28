const mongoose = require ('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
	nombre : { type: String, required: true },
	codigo : { type: String, required: true },
	valorCompra : { type: Number, required: true },
	valorVenta : { type: Number, required: true },
	cantidad : { type: Number, required: true },
});

module.exports = mongoose.model('Producto', esquema);


