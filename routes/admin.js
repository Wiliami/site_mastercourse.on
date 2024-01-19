import express from 'express';
// const bcrypt = require('bcryptjs');
// const salt = bcrypt.wgenSaltSync(10);
const router = express.Router();

 
router.get('/users/create', (req, res) => res.render('admin/users/create'));
router.get('/users/list', (req, res) => res.render('admin/users/list'));
router.get('/users/update', (req, res) => res.render('admin/users/update'));
router.get('/users/delete', (req, res) => res.render('admin/users/delete'));
router.get('/users/example', (req, res) => res.render('admin/users/example'));

export default router;