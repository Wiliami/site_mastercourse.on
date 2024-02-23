/* eslint-disable indent */
/* eslint-disable no-unreachable */
import { Router } from 'express';
import axios from 'axios';

const router = Router();

router.get('/', async (req, res) => {

    try {
        const response = await axios.get('https://api.github.com/');    
        console.log(response.data);
        
        if(response.status >= 200 && response.status < 300) {
            res.status(200).json(response.data);
            console.log(response.data);
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