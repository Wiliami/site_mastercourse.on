import { Router } from 'express';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import pool from '../config/database.js'
import bcrypt from 'bcryptjs'

const router = Router();

dotenv.config()

const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    })
}

router.get('/', (req, res) => res.render('register'));


router.post('/', async(req, res) => {
    const { username, email, password } = req.body;
  
    if(!email || !password) {

      return res.status(400).json({ error: 'Campos obrigatórios.' })
    } 
    
    try {

      const userExist = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      console.log(userExist)
      if(userExist.rows.length > 0) {
        return res.status(400).json({ error: 'Usuário já existe.' })
      }

      const hashedPassword = await bcrypt.hash(password, 10)
        
      const createUser = await pool.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
        [email, hashedPassword]
      )

      const token = generateToken(createUser.rows[0])
      res.status(201).json({ message: 'Usuário cadastrado com sucesso!', token })
    
    } catch (err) {
      res.status(500).send('Erro no servidor.');
    }

});

export default router;