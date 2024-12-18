import { Router } from 'express'
const router = Router()

async function getData() {

    try {
        const url = 'https://dummyjson.com/users/1'
        const response = await fetch(url)

        if(response.ok) {
            const obj = await response.json()  
            console.log(obj) 
          
        } else {
            throw new Error(`Erro ao buscar dados: ${response.status}`)
        }
        
    } catch (err) {
        console.error(err.message)
        throw err
    }
} 


router.get('/teste', async (req, res) => {
  try {
    const user = await getData()
    res.json({ user })
  } catch (err) {
    res.status(500).json({ err: 'Erro ao buscar dados' })
  }
}) 


export default router