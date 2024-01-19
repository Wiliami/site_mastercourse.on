import express from 'express';
import { admin } from '../config/firebaseConfig.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const { email } = req.body;
  console.log('Email recebido:', email || 'E-mail não informado.');
 
  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    console.log('Este e-mail já está cadastrado..');
    // res.status(400).send('Este e-mail já está cadastrado.');
    res.status(200).json({ isValid: false });

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