import { Router } from 'express'
import { create, read } from '../services/dataServices.js'

const router = Router()


router.get('/create', async (req, res) => {
    try {
        const users = await create('users')
        res.render('area-membro/users/create', { users })
    } catch (error) {
        res.status('Erro ao inserir dados na tabela')
    }
})

router.get('/list', async (req, res) => {
    try {
        const users = await read('users')
        res.render('area-membro/users/list', { users })
    } catch (error) {
        res.status('Erro ao recuperar tabela no banco de dados')
    }
})


export default router