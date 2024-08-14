import { Router } from 'express'
import home from './home.js'
import login from './login.js'
import admin from './admin.js'
import users from './users.js'
import register from './register.js'
import products from './products.js'
import membership from './membership.js'

const router = Router()

const routes = [
    { path: '/', view: home },
    { path: '/home', view: membership },
    { path: '/', view: users },
    { path: '/admin', view: admin },
    { path: '/login', view: login },
    { path: '/cadastro', view: register },
    { path: '/products', view: products },
]
    
routes.forEach(({ path, view }) => {
    router.use(path, view)
})

export default router;