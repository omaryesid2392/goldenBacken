const mongoose = require('mongoose');
const database = "goldendb";
const password = "root";

var URI = 'mongodb+srv://omar2392:omar2392@cluster0.q00sr.mongodb.net/goldendb?retryWrites=true&w=majority';

mongoose.connect (URI)
.then(db  => console.log("Atlas en linea"))
.catch(err => console.error(err))
module.exports = mongoose;