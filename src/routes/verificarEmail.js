<<<<<<< HEAD:src/routes/verificarEmail.js
import { Router } from 'express';
const router = Router();
=======
import express from 'express';
import { admin } from '../config/firebaseConfig.js';
const router = express.Router();
>>>>>>> f961faa82baa43abc7f3e1b61f7bd5139fd97095:routes/verificarEmail.js

router.post('/', async (req, res) => {
  const { email } = req.body;
  console.log('Email recebido:', email || 'E-mail não informado.');
 
<<<<<<< HEAD:src/routes/verificarEmail.js
    try {
        const userRecord = await admin.auth().getUserByEmail(email);
        console.log('Este e-mail já está cadastrado.');
        // res.status(400).send('Este e-mail já está cadastrado.');
        res.status(200).json({ isValid: false });
=======
  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    console.log('Este e-mail já está cadastrado..');
    // res.status(400).send('Este e-mail já está cadastrado.');
    res.status(200).json({ isValid: false });
>>>>>>> f961faa82baa43abc7f3e1b61f7bd5139fd97095:routes/verificarEmail.js

  } catch (error) {
    if(error.code === 'auth/user-not-found') {
      console.log('Este e-mail não está cadastrado.');
      // res.status(200).send('Tudo certo');
      res.status(200).json({ isValid: true });
    } else {
      console.error('Erro ao verificar o e-mail');
      // res.status(500).send('Erro ao verificar o e-mail');
      res.status(500).json({ isValid: false });
    }
  }
});

export default router;