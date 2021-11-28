const mongoose = require('mongoose');
const database = "goldendb";
const password = "root";

var URI = "mongodb+srv://omar2392:omar2392@cluster0.q00sr.mongodb.net/goldendb?retryWrites=true&w=majority";

var  mongo =  mongoose.connect (URI);
mongo.then(db  => console.log("Atlas en linea"));
mongo.catch(err=> console.err(err));

module.exports = mongoose;