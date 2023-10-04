const express = require("express");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const router = express.Router();
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert('serviceAccountKey.json')
});

const db = admin.firestore();



router.get('/', (req, res) => res.render('home'));
router.get('/login', (req, res) => res.render('login'));
router.get('/dashboard', (req, res) => res.render('dashboard'));
router.get('/sobre', (req, res) => res.render('sobre'));
router.get('/contatos', (req, res) => res.render('contatos'));
router.get('/help', (req, res) => res.render('help'));
router.get('/forgot-password', (req, res) => res.render('forgot-password'));
router.get('/courses', (req, res) => res.render('courses'));
router.get('/course-details', (req, res) => res.render('course-details'));
router.get('/home', (req, res) => res.render('teste'));
router.get('/home/teste', (req, res) => res.render('teste1'));

<<<<<<< HEAD


router.post('/verificar-email', (req, res) => {
    const { email } = req.body;

=======
router.get('/verificar-email', (req, res) => {
    res.render('verify-email');
});

router.get('/verificar-email', (req, res) => {
    const emailEmUso = true;    
>>>>>>> ae896d3c906d91c06925054044b8269f0b7265fa

    if(email) {
        res.status(400).send('E-mail já está em uso');
    } else {
        res.status(200).send('E-mail disponível...');
    }
<<<<<<< HEAD

});
=======
})
>>>>>>> ae896d3c906d91c06925054044b8269f0b7265fa




router.get('/cadastro', (req, res) => {
    res.render('register');
});

router.post('/cadastro', async(req, res) => {
    const { username, email, password } = req.body;

    if(!password || password.length < 6) {
        res.status(400).send('A senha deve ter pelo menos 6 caracteres.');
    }

    try {
        const createUser = await admin.auth().createUser({
            displayName: username,
            email,
            password,
        });


        await db.collection('users').doc(createUser.uid).set({
            create_date: new Date(),
            displayName: username,
            email,
            password,
            update_date: new Date(),
        })

        console.log('Novo usuário criado com sucesso: ', createUser.uid);
        res.status(201).send('Usuário cadastrado com sucesso!');
    } catch (error) {
        if(error.code === 'auth/email-already-exists') {
            res.status(400).send('Esta e-mail já está cadastrado por outro usuário!');
        } else {
            console.log('Erro ao criar usuário: ', error);
            res.status(500).send('Erro ao criar usuário');
        }
          
    }

});

module.exports = router;