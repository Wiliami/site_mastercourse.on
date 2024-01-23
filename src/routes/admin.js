<<<<<<< HEAD:src/routes/admin.js
import { Router } from 'express';
const router = Router();
=======
import express from 'express';
// const bcrypt = require('bcryptjs');
// const salt = bcrypt.wgenSaltSync(10);
const router = express.Router();

>>>>>>> f961faa82baa43abc7f3e1b61f7bd5139fd97095:routes/admin.js
 
router.get('/users/create', (req, res) => res.render('admin/users/create'));
router.get('/users/list', (req, res) => res.render('admin/users/list'));
router.get('/users/update', (req, res) => res.render('admin/users/update'));
router.get('/users/delete', (req, res) => res.render('admin/users/delete'));
router.get('/users/example', (req, res) => res.render('admin/users/example'));

export default router;