const express = require("express");
const router = express.Router();


// LISTAGEM
// router.get('/admin/users/list', (req, res) => {
//     res.render('admin/users/list') //caminho das pastas
// });


// CRIACAO
// router.get('/admin/users/create', (req, res) => { 
//     res.render('admin/users/create') // caminho das pastas
// });


// ATUALIZACAO 
router.get('/admin/users/update', (req, res) => {
    res.render('admin/users/update')
});


// DELETAR
router.get('/admin/users/delete', (req, res) => {
    res.render('admin/users/delete')
});

module.exports = router;