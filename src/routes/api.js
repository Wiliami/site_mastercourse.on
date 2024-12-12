import { Router } from 'express'
const router = Router()

async function getData(userId) {

    try {
        const url = `https://dummyjson.com/users/${userId}`
        const response = await fetch(url)

        if(response.status == 200) {
            const obj = await response.json()
            return obj
        } else {
            console.error('Erro ao buscar dados')
        }
        
    } catch (err) {
        console.error(err.message)
    }
}


router.get('/teste', async (req, res) => {
    try {
        const user = await getData(2)
        res.json({ user })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuário.' })
    }
}) 


export default router