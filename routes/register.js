const express = require('express');
const router = express.Router();
const { admin, db } = require('../firebaseConfig')

router.get('/', (req, res) => {
    res.render('register');
});


router.post('/', async(req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    
    if(!password || password.length < 6) {
        return res.status(400).send('A senha deve ter pelo menos 6 caracteres.');
    }

    
    if(username, email, password, confirmPassword) {
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
                update_date: new Date(),
            });
    
            console.log('Usuário cadastrado com sucesso: ', createUser.uid);
            res.status(201).send('Usuário cadastrado com sucesso!');
        } catch (error) {
            // if(error.code === 'auth/email-already-exists') {
            //     console.log('Este e-mail já está cadastrado por outro usuário!');
            //     res.status(400).send('Este e-mail já está cadastrado por outro usuário!');
            // } else {
            // }
            console.log('Erro ao criar usuário: ', error);
            res.status(500).send('Erro ao criar usuário');
        }
    } else {
        console.log('Preencha todos os dados');
    }


   

});


module.exports = router;