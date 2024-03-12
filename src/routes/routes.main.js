import { Router } from 'express';
import home from './home.js';
import login from './login.js';
import register from './register.js';
import user from './user.js';
import admin from './admin.js';
import product from './products.js';

const router = Router();

router.use('/', home);
router.use('/login', login);
router.use('/cadastro', register);
router.use('/home', user);
router.use('/admin', admin);
router.use('/product', product);
// router.use('/dashboard', (req, res) =>  res.render('dashboard'));

export default router;