import { Router } from 'express';
const router = Router();


//validar email de usuário

router.post('/', async (req, res) => {
  const { email } = req.body;
  // console.log('Email recebido:', email || 'E-mail não informado.');
  
  try {
    if(email) {
      console.log('Email:', email)
    } else {
      console.error('Não existe email')
    }
  } catch (error) {
    
  }
});

export default router;