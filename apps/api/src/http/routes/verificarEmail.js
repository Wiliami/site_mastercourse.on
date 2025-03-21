import { Router } from 'express';
const router = Router();

//validar email de usuário

router.post('/', async (req, res) => {
  const { email } = req.body;
  // console.log('Email recebido:', email || 'E-mail não informado.');

  const query = 'SELECT * FROM users WHERE email = $1'
  const values = [email]
  
  try {
    const result = await pool.query(query, values)
    return result.rows.length > 0
  } catch (error) {
      console.log('Erro ao verificar email', error)
      throw error
  }

});

export default router;