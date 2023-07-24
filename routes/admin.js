const express = require("express");
const Admin = require("../model/Admin");
const db = require("../model/db");
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const router = express.Router();

 
router.get('/users/create', (req, res) => res.render('admin/users/create'));
router.get('/users/list', (req, res) => res.render('admin/users/list'));

router.get('/users/update/:id', (req, res) => {
    const novo_id = firebase.database().ref('users').child('users/6dMj9qVDycQeCwnmjQ7DbF6BEZN2').push().key;
    console.log(novo_id);
    const id = req.params.id;
    res.render('admin/users/update')
    res.json({ id: `${id}` });
});

router.get('/users/delete', (req, res) => res.render('admin/users/delete'));

router.post('/users/list', (req, res) => {
    Admin.create({
        userName: req.body.nameUser,
        userEmail: req.body.emailUser,
        userMainPassword: bcrypt.hashSync(req.body.mainPassUser, salt),
        userPassword: bcrypt.hashSync(req.body.repeatPassUser, salt) 
    }).then( () => {
        res.status(200).json({ success: 'Usuário cadastrado com sucesso!'});
    }).catch((error) => {
        res.status(400).json({ error: 'Não foi possível cadastrar usuário, ' + error});
    }) 
});


module.exports = router;