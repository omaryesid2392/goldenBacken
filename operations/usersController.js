const coleccionUsers = require('../schemas/users.schemas');

const usersController = {}

usersController.buscarUser = async (req, res) => {
    console.log('buscar user');
    
}
usersController.buscarUsers = async (req, res) => {
    console.log('buscar users');
}
usersController.updateUser = (req, res) => {
    res.send('update user')

}
usersController.createUser = (req, res) => {
    res.send('create user')

}
usersController.login = async (req, res) => {
    const dato = await coleccionUsers.find({email: req.body.email, contraseña: req.body.Contraseña});

    if (dato != '') {
        res.send('datos correctos' + dato)
    }
    else{
        res.send('datos incorrectos')
    }

}
module.exports = usersController;