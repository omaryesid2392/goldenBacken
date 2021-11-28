const coleccionUsers = require('../schemas/users.schemas');

const usersController = {}

usersController.buscarUser = async (req, res) => {
    console.log('buscar user');
    const dato = await usersController.findById(req.params.id);
    res.json(dato);
    
}
usersController.buscarUsers = async (req, res) => {
    console.log('buscar users');
}
usersController.updateUser = (req, res) => {
    res.send('update user')

}
usersController.createUser = async (req, res) => {
    //res.send('create User');
    const user = new coleccionUsers(req.body);
    console.log(user);
    await user.save();
    res.redirect('http://localhost:4200/register');
    res.json({ "status": "Usuario guardado" });

}
usersController.login = async (req, res) => {
    const dato = await coleccionUsers.find({email: req.body.email, contraseña: req.body.Contraseña});

    if (dato != '') {
        res.redirect('http://localhost:4200/general')
        res.send('datos correctos' + dato)
    }
    else{
        res.redirect('http://localhost:4200/login')
        res.send('datos incorrectos')
    }

}
module.exports = usersController;