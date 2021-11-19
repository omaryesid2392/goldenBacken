const mongoose = require ('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
	stock : { type: Number, required: true },
	idUsersCliente: { type: String, required: true },
	idUsersEmployee: { type: String, required: true },
	products : { type: Object, required: true },
	fecha : { type: Date, required: true },
	total : { type: Number, required: true },

});

module.exports = mongoose.model('Venta', esquema);