import { Router } from 'express'
import { create, read } from '../services/data.js'
import pool from '../config/database.js'

const router = Router()


async function checkEmailExists(email) {
    const query = 'SELECT * FROM users WHERE email = $1'
    const values = [email]

    try {
        const result = await pool.query(query, values)
        return result.rows.length > 0
    } catch (error) {
        console.log('Erro ao verificar email', error)
        throw error
    }
}


router.post('/users', async (req, res) => {

    const { name, email } = req.body

    const data = {  
        name,
        email
    }

    try {
        const emailExists = await checkEmailExists(email)

        if(emailExists) {
            console.log('Este email já está cadastrado.')
            res.status(409).json({
                message: 'Este email já está cadastrado.'
            })

            return;
        }

        const users = await create('users', data)
        console.log(`Usuário criado com sucesso: ${JSON.stringify(users)}`)   


        res.status(201).json({
            message: 'Usuário criado com sucesso',
            users
        })

    } catch (error) {
        console.error('Erro ao criar usuário:', error)

        res.status(500).json({
            message: 'Erro ao criar usuário',
            error: error.message
        })
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await read('users')
        res.render('area-membro/users/list', { users })
    } catch (error) {
        res.status('Erro ao recuperar tabela no banco de dados')
    }
})

export default router