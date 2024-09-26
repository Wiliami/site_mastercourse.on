import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('area-membro/index')
})

export default router;  