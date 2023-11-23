const express = require("express");
const router = express.Router();
const { admin } = require('../firebaseConfig');


router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if(email && password)  {

        if(password.length < 6) {
            console.log('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        // if(!isEmailValid(email)) {
        //     console.log('O formato de e-mail é válido!');
        // }

        try {
            const userRecord = await admin.auth().getUserByEmail(email);
            await admin.auth().updateUser(userRecord.uid, { password });

            console.log('Usuário autenteticado com sucesso.');
            res.status(200).send('Usuário autenteticado com sucesso.');
        } catch (error) {
            console.log('Erro ao autenticar usuário', error);
            res.status(401).send('Falha na autenticação.');    
        }
        
    } else {
        console.log('Preencha todos os campos')
    }
    
});

// function isEmailValid(email) {
//     const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }


module.exports = router;