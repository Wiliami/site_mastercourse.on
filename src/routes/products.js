import { Router } from 'express';
import { readResource } from '../services/data.js'

const router = Router();


router.get('/list', async (req, res) => {
    try {
        const products = await readResource('products') 
        res.render('area-membro/products/read', { products })
    } catch (error) {
        console.error('Erro ao buscar dados da tabela:', error)
    }

});

export default router;