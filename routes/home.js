const express = require("express");
const User = require('../model/User');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const router = express.Router();


router.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

// router.post('/dashboard', (req, res) => {
//     User.create({
//         userName: req.body.nome,
//         userEmail: req.body.email,
//         userPassword: bcrypt.hashSync(req.body.password, salt),
//     }).then(() => {
//         res.status(200).json({ success: 'Usuário cadastrado com sucesso!'})
//     }).catch((error) => {
//         res.status(400).json({ error: 'Não foi possível cadastrar usuário, ' + error})
//     })
// });



router.get('/', (req, res) => res.render('home'));
router.get('/sobre', (req, res) => res.render('sobre'));
router.get('/contatos', (req, res) => res.render('contatos'));
router.get('/help', (req, res) => res.render('help'));
router.get('/forgot-password', (req, res) => res.render('forgot-password'));
router.get('/courses', (req, res) => res.render('courses'));
router.get('/course-details', (req, res) => res.render('course-details'));
router.get('/account/user-profile', (req, res) => res.render('account/user-profile'));
router.get('/checkout', (req, res) => res.render('checkout'));

router.get('/jQuery', (req, res) => res.render('jQuery-example'));


module.exports = router;