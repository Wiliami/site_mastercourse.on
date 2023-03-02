const express = require("express");
const router = express.Router();


// no parametro do get eu escrevo a minha url: ex.: users/list
router.get('/users/list', (req, res) => {
    res.render('admin/users/list') //caminho das pastas
});




module.exports = router;