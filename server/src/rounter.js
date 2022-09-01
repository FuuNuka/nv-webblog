const UserController = require('./controllers/UserController')

module.exports =(app)=> {
    app.post ('/user',
    UserController.creat)
    app.put('/user/:userId',UserController.put)
    app.delete('/user/:userId', UserController.remove)
    app.get('/user/:userId',UserController.show)
    app.get('/user',UserController.index)
    }