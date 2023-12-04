const express = require("express");
const router = express.Router();
// const { admin, db } = require('../firebaseConfig');
// const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.render('login');
});

// console.log(process.env.FIREBASE_AUTH_DOMAIN);
/* Validate format E-mail */
// function isEmailValid(email) {
//     const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
//     return emailRegex.test(email);

// }

// router.post('/', async (req, res) => {  
//     const { email, password } = req.body;

//     if(email && password)  {
       
//         if(password.length < 6) {
//             console.log('A senha deve ter pelo menos 6 caracteres.');
//             return res.status(400).send('A senha deve ter pelo menos 6 caracteres.');
//         }
        
//         if(!isEmailValid(email)) {
//             console.log('O formato de e-mail é inválido!');
//             return res.status(400).send('O formato de e-mail é inválido!');
//         }

//         try {
//             const userPassaword = '123456';
//             const user = await admin.auth().getUserByEmail(email);
           
            
//             if(user.email === email && userPassaword === password) {
//                 const customToken = await admin.auth().createCustomToken(user.uid);
//                 console.log('Sucesso:', customToken);
//                 res.status(200).json({ token: customToken });
//                 return;
//             } else {
//                 console.log('Senha ou e-mail incorreto.');
//                 res.status(401).send('E-mail ou senha incorreta.');
//                 return;
//             }    
    
//         } catch (error) {
//             console.log('Erro ao autenticar usuário', error);
//             res.status(401).json({ message: 'Falha na autenticação.'});    
//         }
        
//     } else {
//         console.log('Preencha todos os campos')
//         res.status(400).send('Preencha todos os campos');
//         return;
//     }
    
// });

module.exports = router;