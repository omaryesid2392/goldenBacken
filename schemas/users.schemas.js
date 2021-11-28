const mongoose = require ('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
	name : { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: Number, required: true },
	password: { type: String, required: true },
	rol : { type: String, required: false },
});
module.exports = mongoose.model('User', esquema);