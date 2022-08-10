const { Router } = require ('express')
const ContactController = require ('./app/Controllers/ContactController')
const Validation = require('./app/Middlewares/Validation')

const routes = new Router()

routes.get('/', Validation, ContactController.showAll)
routes.post('/contacts', ContactController.store)
routes.get('/contact', ContactController.show)
routes.put('/contact/:id', ContactController.update)
routes.delete('/contact/:id', ContactController.remove)



module.exports = routes