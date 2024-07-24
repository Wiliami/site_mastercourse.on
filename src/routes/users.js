import { Router } from 'express'
import { users, products } from '../../database.js'

const router = Router()

router.get('/', (req, res) => {
    res.render('users', { users, products })
})

export default router