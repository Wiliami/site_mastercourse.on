import pool from '../../config/database.js'

const createUser = async (name, email) => {
    try {
        const res = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email])
        console.log('Usuário criado:', res.rows[0])
    } catch (error) {
        console.error('Erro ao criar usuário:', error)
    }
}

createUser('Diego3g', 'diego3g@gmail.com')

export default createUser