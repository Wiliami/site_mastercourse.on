import { Router } from 'express';
import sum from '../utils/sum'
const router = Router();

const soma = sum(1, 1)

router.get('/sum', (req, res) => {
    res.json({ soma })
})


export default router;