const express = require('express');
const router = express.Router();
const { db } = require('../firebaseConfig');

router.post('/', async (req, res) => {
    const { email } = req.body;
    console.log('Email recebido:', email || 'E-mail não informado.');


    try {
        const userRef = db.collection('users');
        const snapshot = await userRef.where('email', '==', email).get();
        
        if(!snapshot.empty) {
            console.log('Este e-mail já está cadastrado.');
            res.status(400).send('Este e-mail já está cadastrado.');
            return;
        }

    } catch (error) {
        console.error('Erro ao verificar o e-mail: ', error);
        res.status(500).send('Erro ao verificar o e-mail.');
    }


});

module.exports = router;