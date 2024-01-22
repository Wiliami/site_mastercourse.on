import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.render('register');
});


router.post('/', async(req, res) => {
    const { username, email, password, confirmPassword } = req.body;
 
        if(username && email && password && confirmPassword) {
           
            if(password.length < 6) {
                console.log('A senha deve ter pelo menos 6 caracteres.');
                res.status(400).send('A senha deve ter pelo menos 6 caracteres.');
                return;
            }
    
            if(password !== confirmPassword) {
                console.log('As senhas não coincidem.');
                res.status(400).send('As senhas devem ser iguais.');
                return;
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
                    update_date: new Date(),
                });
    
                console.log('Usuário cadastrado com sucesso: ', createUser.uid);
                res.status(201).send('Usuário cadastrado com sucesso!');
    
            } catch (error) {
                console.log('Erro ao criar usuário: ', error);
                res.status(500).send('Erro ao criar usuário');
            }
        

        } else {
            console.log('Preencha todos os dados');
            res.status(400).send('Preencha todos os campos.');
            return;
        }

       

});


export default router;