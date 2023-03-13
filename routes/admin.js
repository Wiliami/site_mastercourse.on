const express = require("express");
const router = express.Router();


// no parametro do get eu escrevo a minha url: ex.: users/list
router.get('/users/list', (req, res) => {
    res.render('admin/users/list') //caminho das pastas
});


router.get('/users/create', (req, res) => {
    res.render('admin/users/create')
})




module.exports = router;