import { Router } from 'express'

const router = Router();

async function getData() {

    try {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await fetch(url)
        // console.log(response)

        if(response.ok) {
            const obj = await response.json()
            console.log(obj)
        } else {
            throw new Error(`Erro ao buscar dados: ${response.status}`)
            // preciso saber o status code caso algum dê algum erro 
        }
    } catch (err) {
        console.error(err.message)
    }
}


router.get('/posts', async (req, res) => {
    try {
        // res.render('teste') // Sem view
        const posts = await getData()
        res.json({ posts })
    } catch (err) {
        res.status(500).json({ err: 'Erro ao buscar dados.' })
    }

})

export default router