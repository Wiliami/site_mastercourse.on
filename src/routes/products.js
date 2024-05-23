import { Router } from 'express';
const router = Router();
const { admin, db } = require('../firebaseConfig'); // esse arquivo nã existe

router.get('/create', (req, res) => res.render('area-membro/products/create'));

router.post('/create', async (req, res) => {
    try {
    
        const { product, price, quantity } = req.body;

        const docRef = db.collection('products').doc();
        await docRef.set({
            product,
            price,
            quantity
        }); 

        res.status(200).send({ message: 'Produto criado com sucesso', id: docRef.id });

    } catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(500).send({ message: 'Erro ao criar produto', error: error.message });
    }
});

router.get('/list', (req, res) => {
    res.render('area-membro/products/list')
});

export default router;