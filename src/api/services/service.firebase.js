import { Router } from 'express';
import FirebaseService from '../../../_app/FirebaseService.js';

const firebase = new FirebaseService;

const router = Router();

router.get('/', async (req, res) => {
    try {
        const data = await firebase.getData('users', '13dMGj2dbPNCbAzZQOYNkzvL0ZS2');

        res.status(200).json({ ok: true, data });

        console.log(data);
    } catch (error) {
        res.status(500).send('Erro ao buscar dados');
        console.log('Erro ao buscar dados:', error);    
    }
});

export default router;