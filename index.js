// const express = require('express');
 //const cors = require('cors');
 
const mongoose = require('./connections');
const app = require('./app');
app.listen(app.get('port'),()=> {
	console.log(process.env.npm_package_name + " iniciado en puerto "+ app.get('port'))
});
// app.listen(app.get('port'))
// console.log('Server on Port', app.get('port'))
