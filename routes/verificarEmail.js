const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { email } = req.body;

    // Simulando a verificação do e-mail
    // Aqui você precisa implementar a lógica real para verificar no Firebase, banco de dados, etc.
    const emailEmUso = true;

    if (emailEmUso) {
        res.status(400).send('E-mail já está em uso.');
    } else {
        res.status(200).send('E-mail disponível.');
    }


});

module.exports = router;