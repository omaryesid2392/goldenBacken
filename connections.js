const mongoose = require('mongoose');
const database = "goldendb";
const password = "root";
const URI = 'mongodb+srv://root:'+password+'@cluster0.q00sr.mongodb.net/'+database+'?retryWrites=true&w=majority';

mongoose.connect(URI)
	.then(db => console.log("Atlas en linea"))
	.catch(err=> console.err(err))

module.exports = mongoose;