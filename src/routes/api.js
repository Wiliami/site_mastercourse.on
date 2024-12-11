import { Router } from 'express'
const router = Router()

async function getData() {

    try {
        const url = 'https://dummyjson.com/users/1'
        const response = await fetch(url)

        if(response.status == 200) {
            const obj = await response.json()
            console.log(obj) 
        } else {
            console.error('Erro ao buscar dados')
        }
        
    } catch (err) {
        console.error(err.message)
    }
}

const users = getData()

router.get('/teste', (req, res) => {
    res.json({ user: users }) 
}) 


export default router