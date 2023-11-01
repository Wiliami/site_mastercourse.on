const express = require('express');
const router = express.Router();
const { admin } = require('../firebaseConfig');

router.post('/', async (req, res) => {
    const { email } = req.body;
    console.log('Email recebido:', email || 'E-mail não informado.');
 
    try {
        await admin.auth().getUserByEmail(email);
        console.log('Este e-mail já está cadastrado..');
        res.status(400).send('Este e-mail já está cadastrado.');

    } catch (error) {
        if(error.code === 'auth/user-not-found') {
            console.log('Este e-mail não está cadastrado.');
            res.status(200).send('Tudo certo');
            return;
        } else {
            console.error('Erro ao verificar o e-mail');
            res.status(500).send('Erro ao verificar o e-mail.');
        }
    }
});

module.exports = router;