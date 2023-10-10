const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');


const db = admin.firestore();

router.post('/', async (req, res) => {
    const { email } = req.body; 
    console.log('Email recebido:', email);

    if(!email) {
        console.error('E-mail não fornecido!');
    } else {
        try {
            const userRef = db.collection('users');
            const snapshot = await userRef.where('email', '==', email).get();

            if(!snapshot.empty) {
                console.log('Este e-mail já está cadastrado');
                res.status(400).send('E-mail já está em uso.');
            } else {
                console.log('E-mail disponível');
                res.status(200).send('E-mail disponível.');
            }
        } catch (error) {
            console.error('Erro ao verificar o e-mail: ', error);
            res.status(500).send('Erro ao verificar o e-mail.');
        }
    }


});

module.exports = router;