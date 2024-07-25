import { Router } from 'express';
import home from './home.js';
import login from './login.js';
import register from './register.js';
import membership from './membership.js';
import admin from './admin.js';
import products from './products.js';

const router = Router();

const routes = [
    {path: '/', view: home},
    {path: '/login', view: login},
    {path: '/cadastro', view: register},
    {path: '/home', view: membership},
    {path: '/admin', view: admin},
    {path: '/products', view: products},
]
    
routes.forEach(({ path, view }) => {
    router.use(path, view)
})

export default router;