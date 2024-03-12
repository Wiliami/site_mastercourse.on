import { Router } from 'express';
const router = Router();

router.get('/create', (req, res) => {
    res.render('area-membro/products/create');
});

router.get('/list', (req, res) => {
    res.render('area-membro/products/list')
});

export default router;