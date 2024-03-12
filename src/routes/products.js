import { Router } from 'express';
const router = Router();

router.get('/create', (req, res) => {
    res.send('Route product');
});

export default router;