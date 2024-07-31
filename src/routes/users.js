import { Router } from 'express'
import { create, read } from '../services/dataServices.js'

const router = Router()


router.get('/list', async (req, res) => {
    try {
        const users = await read('users')
        res.render('area-membro/users/list', { users })
    } catch (error) {
        res.status('Erro ao recuperar tabela no banco de dados')
    }
})

router.get('/create', async (req, res) => {
    const data = { name: 'Admin', email: 'admin@gmail.com' }

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

export default router