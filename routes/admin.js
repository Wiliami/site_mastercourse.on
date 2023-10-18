const express = require("express");
// const Admin = require("../model/Admin");
const db = require("../model/db");
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const router = express.Router();

 
router.get('/users/create', (req, res) => res.render('admin/users/create'));

router.get('/users/list', async (req, res) => {
    res.render('admin/users/list');    
});

router.get('/users/update', (req, res) => res.render('admin/users/update'));
router.get('/users/delete', (req, res) => res.render('admin/users/delete'));


// router.post('/users/list', (req, res) => {
//     Admin.create({
//         userName: req.body.nameUser,
//         userEmail: req.body.emailUser,
//         userMainPassword: bcrypt.hashSync(req.body.mainPassUser, salt),
//         userPassword: bcrypt.hashSync(req.body.repeatPassUser, salt) 
//     }).then( () => {
//         res.status(200).json({ success: 'Usuário cadastrado com sucesso!'});
//     }).catch((error) => {
//         res.status(400).json({ error: 'Não foi possível cadastrar usuário, ' + error});
//     }) 
// });


module.exports = router;