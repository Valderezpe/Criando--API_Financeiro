const express = require ('express');
const tasksController = require ('./controller/tasksController');

const router = express.Router();

router.get('/cadastro', tasksController.getAll);
router.post('/cadastro', tasksController.createCad);

module.exports = router;