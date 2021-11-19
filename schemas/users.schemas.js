const mongoose = require ('mongoose');
const { Schema } = mongoose;

const esquema = new Schema({
	name : { type: String, required: true },
	email: { type: String, required: true },
	cel: { type: Number, required: true },
	rol : { type: String, required: true },
});
module.exports = mongoose.model('User', esquema);