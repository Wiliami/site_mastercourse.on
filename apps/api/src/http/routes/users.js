import { Router } from 'express'
import { create, read, update, _delete } from '../services/data.js'
import pool from '../../../../../config/database.js'

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

    const data = { name, email, password }

    if(!name || !email || !password) {
        return res.status(400).json({ error: 'Dados são obrigatórios' })
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

        const draw = req.query.draw 
        const start = parseInt(req.query.start) || 0
        const length = parseInt(req.query.length) || 10
        const search = req.query.search?.value || ''

        const totalQuery = await pool.query('SELECT COUNT(*) as total FROM users')
        const total = parseInt(totalQuery.rows[0].total)


        const searchQuery = `
            SELECT userid, name, email
            FROM users
            WHERE
                name ILIKE $1 OR
                email ILIKE $1
            ORDER BY userid DESC
            LIMIT $2 OFFSET $3
        `;

        const result = await pool.query(searchQuery, [
            `%${search}%`,
            length,
            start
        ]);


        res.json({
            draw: parseInt(draw),
            recordsTotal: total,
            recordsFiltered: total,
            data: result.rows
        })

        return res.json(users)
    } catch (error) {
        res.status('Erro ao recuperar tabela no banco de dados')
    }
})


router.put('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id, 10);

    console.log('Tipo do ID: ', typeof userId)

    const { name, email, password } = req.body

    const userSchema = {
        userId,
        name,
        email,
        password
    }

    try {
        const result = await update('users', userSchema)
        console.log(result)
    } catch (err) {
        console.error('Falha ao atualizar recurso:', err)
    }
})


router.delete('/users/:id', async (req, res) => {

    try {
        const userId = parseInt(req.params.id, 10)  

        if(isNaN(userId)) {
            return res.status(400).json({ err: 'ID inválido.' })
        }

        const checkUser = await pool.query('SELECT * FROM users WHERE userid = $1', [userId])

        if(checkUser.rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' })
        }

        const deleteUser = await _delete('users', 'userid', userId)
        console.log('Usuário:', deleteUser)

        
        // if (deleteUser) {
        //     res.status(201).json({
        //         message: 'Usuário excluído com sucesso',
        //         user: deleteUser
        //     })
        // } else {
        //     res.status(404).json({
        //         message: 'Usuário não encontrado'
        //     })
        // }

        
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao excluir usuário',
            error: error.message
        })
    }
})

export default router