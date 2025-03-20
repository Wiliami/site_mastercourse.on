import { Router } from 'express';
const router = Router();
// const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.render('login'))

/* Validate format E-mail */
function isEmailValid(email) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return emailRegex.test(email);
}

router.post('/', async (req, res) => {  
    const { email, password } = req.body;
    console.log(email)
    console.log(password)

    if(email && password) {
       
        if(password.length < 6) {
            console.log('A senha deve ter pelo menos 6 caracteres.');
            return res.status(400).send('A senha deve ter pelo menos 6 caracteres.');
        }
        
        if(!isEmailValid(email)) {
            console.log('O formato de e-mail é inválido!');
            return res.status(400).send('O formato de e-mail é inválido!');
        }

       
        
    } else {
        console.log('Preencha todos os campos')
        res.status(400).send('Preencha todos os campos');
        return;
    }
    
});

export default router;