import { Router } from 'express'
import getUsers from './users/read.js'

const router = Router()

router.get('/', (req, res) => {
    res.render('users', { users })
})

export default router