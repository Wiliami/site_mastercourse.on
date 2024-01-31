import { Router } from 'express';
import home from './home.js';
import login from './login.js';
import register from './register.js';
import user from './user.js';
import admin from './admin.js';
import dashboard from './dashboard.js'
import api from '../../services/api/github.service.js';

const router = Router();

router.use('/', home);
router.use('/login', login);
router.use('/cadastro', register);
router.use('/home', user);
router.use('/admin', admin);
router.use('/dashboard', dashboard)
router.use('/api/data', api);

export default router;