import { Router } from 'express'
import getUsers from './users/read.js'

const router = Router()



const users = JSON.stringify(getUsers())

router.get('/', (req, res) => {
    res.render('users', { users })
})

export default router