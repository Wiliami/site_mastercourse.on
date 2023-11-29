const express = require("express");
const router = express.Router();
const { admin } = require('../firebaseConfig');
const jwt = require('jsonwebtoken');


router.get('/', (req, res) => {
    res.render('login');
});


/* Validate format E-mail */
function isEmailValid(email) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return emailRegex.test(email);

}

router.post('/', async (req, res) => {
    const { email, password, uid } = req.body;

    if(email && password)  {

        if(password.length < 6) {
            console.log('A senha deve ter pelo menos 6 caracteres.');
            return res.status(400).send('A senha deve ter pelo menos 6 caracteres.');
        }
        
        if(!isEmailValid(email)) {
            console.log('O formato de e-mail é inválido!');
            return res.status(400).send('O formato de e-mail é inválido!');
        }

        try {
            // const userRecord = await admin.auth().getUserByEmail(email);
            // console.log(userRecord);
            // await admin.auth().updateUser(userRecord.uid, { password });

            const customToken = await admin.auth().createCustomToken(uid);
            console.log(customToken);
            res.status(200).json({ token: customToken });


        
            // console.log('Usuário autenticado com sucesso.');
            // res.status(200).send('Usuário autenticado com sucesso.');
        } catch (error) {
            console.log('Erro ao autenticar usuário', error);
            res.status(401).send('Falha na autenticação.');    
        }
        
    } else {
        console.log('Preencha todos os campos')
        res.status(400).send('Preencha todos os campos');
        return;
    }
    
});

module.exports = router;