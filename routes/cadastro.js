const express = require('express');
const router = express.Router();



router.get('/testando', (req, res) => {
    res.render('cadastro')
})



module.exports = router;