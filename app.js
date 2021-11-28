
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
//const path = require('path');
const app = express();

// setting
app.set('port', process.env.process || 3000);

//midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//listas routers
app.use('/api/productos/', require('./routes/productoRouters'));
app.use('/api/ventas/', require('./routes/ventasRouters'));
app.use('/api/user/', require('./routes/usersRouters'));

//static files
//app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;