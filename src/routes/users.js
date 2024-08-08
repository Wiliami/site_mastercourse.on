import { Router } from 'express'
import { create, read } from '../services/dataServices.js'

const router = Router()

router.post('/users', async (req, res) => {

    const { name, email } = req.body

    const data = {  
        name,
        email
    }

    try {
        const users = await create('users', data)
        console.log(`Usuário criado com sucesso: ${JSON.stringify(users)}`)

        res.status(201).json({
            message: 'Usuário criado com sucesso',
            users
        })

    } catch (error) {
        console.error('Erro ao cria usuário:', error)

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