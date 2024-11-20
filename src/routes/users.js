import { Router } from 'express'
import { createResource, readResource, deleteResource } from '../services/data.js'
import pool from '../config/database.js'

const router = Router() 

async function checkEmailExists(email) {
    const query = 'SELECT COUNT(*) AS count FROM users WHERE email = $1'

    try {
        const result = await pool.query(query, [email])
        return parseInt(result.rows[0].count, 10) > 0
    } catch (err) {
        console.error('Erro ao verificar email:', err)
        throw err
    }
}


router.post('/users', async (req, res) => {
    const { name, email, password } = req.body

    const data = {  
        name,
        email,
        password
    }

    try {
        const emailExists = await checkEmailExists(email)

        if(emailExists) {
            console.log('Este e-mail já sendo utilizado por outro usuário.')
            res.status(409).json({
                message: 'Este e-mail já sendo utilizado por outro usuário.'
            })

            return;
        }

        const users = await createResource('users', data)
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
        const users = await readResource('users')   
        // res.render('area-membro/users/list', { users })


        const draw = req.query.draw
        const start = parseInt(req.query.start) || 0
        const length = parseInt()

        const totalQuery = await pool.query('SELECT COUNT(*) as total FROM users')
        const total = parseInt(totalQuery.rows[0].total)



        return res.json(users)
    } catch (error) {
        res.status('Erro ao recuperar tabela no banco de dados')
    }
})


router.put('/users/:id', (req, res) => {
    const userId = req.params.id
    
    try {
        console.log('Item atualizado com sucesso')
    } catch (error) {
        console.error('Falha ao atualizar recurso:', error)
    }
})


router.delete('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id, 10)

    try {
        const deleteUser = await deleteResource('users', 'id', userId)
        console.log('Usuário:', deleteUser)

        
        if (deleteUser) {
            res.status(201).json({
                message: 'Usuário excluído com sucesso',
                user: deleteUser
            })
        } else {
            res.status(404).json({
                message: 'Usuário não encontrado'
            })
        }

        
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao excluir usuário',
            error: error.message
        })
    }
})

export default router