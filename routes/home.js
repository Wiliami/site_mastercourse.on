const express = require("express");
const router = express.Router();


router.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

router.post('/dashboard', (req, res) => {
    User.create({
        userName: req.body.nome,
        userEmail: req.body.email,
        userPassword: bcrypt.hashSync(req.body.password, salt),
    }).then(() => {
        // res.send('<div class="alert alert-primary" role="alert">Usuário cadastrado com sucesso!</div>')
        res.status(200).json({ success: 'Usuário cadastrado com sucesso!'})
        // bcrypt.compareSync('12345678', userPassword); // true
    }).catch((erroMessage) => {
        // res.send('<div class="alert alert-danger" role="alert">Não foi possível cadastrar usuário!</div>')
        res.status(400).json({ error: 'Não foi possível cadastrar usuário, ' + erroMessage})
    })
});



router.get('/', (req, res) => {
    res.render('home')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.get('/cadastro', (req, res) => {
    res.render('cadastro')
});

router.get('/sobre', (req, res) => {
    res.render('sobre')
});

router.get('/contatos', (req, res) => {
    res.render('contatos');
});

router.get('/help', (req, res) => {
    res.render('help');
});

router.get('/forgot-password', (req, res) => {
    res.render('forgot-password')
});

router.get('/courses', (req, res) => {
    res.render('courses')
});


// Comoras de curso
router.get('/checkout', (req, res) => {
    res.render('checkout')
});


router.get('*', (req, res) => {
    res.render('404');
});



module.exports = router;