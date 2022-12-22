const express = require ('express');

const router = express.Router();

router.get('/', (req, res) => res.status(200).send('Olá router funcionando'));

module.exports = router;