import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('area-membro/index')
})

router.get('/update', (req, res) => {
    res.render('area-membro/users/update')
})

export default router;  