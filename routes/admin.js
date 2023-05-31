const express = require("express");
const db = require("../model/db");
const Admin = require("../model/Admin");
const router = express.Router();

 
router.get('/users/create', (req, res) => {
    res.render('admin/users/create')
});

router.get('/users/list', (req, res) => {
    res.render('admin/users/list')
});

router.get('/users/update', (req, res) => {
    res.render('admin/users/update')
});

router.get('/users/delete', (req, res) => {
    res.render('admin/users/delete')
});


router.post('/users/list', (req, res) => {
    Admin.create({
        userName: req.body.nameUser,
        userEmail: req.body.emailUser,
        userMainPassword: req.body.mainPassUser,
        userPassword: req.body.repeatPassUser
    }).then( () => {

    })
})



module.exports = router;