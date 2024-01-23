/* eslint-disable indent */
/* eslint-disable no-unreachable */
import { Router } from 'express';
import axios from 'axios';

const router = Router();

router.get('/', async (req, res) => {
    // return res.json({ message: 'Dados do frotend' });
    try {
        const response = await axios.get('https://api.github.com/');
        console.log(response);
        
        if(response.status === 200) {
            res.status(200).json({ message: 'ok' });
            console.log(response);
        } else {
            res.status(500).json({ message: 'GitHub API request failed' });
            console.log('GitHub API request failed');
        }
        
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ message: 'Internal Server Error'});
    }
});

export default router;