/* eslint-disable import/extensions */
const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const categoriaController = new CategoriaController();
const router = new Router();

router.get('/categorias', (req, res) => categoriaController.getAll(req, res));
router.get('/categoria/:id', (req, res) => categoriaController.getById(req, res));
router.post('/categoria', (req, res) => categoriaController.create(req, res));
router.put('/categoria/:id', (req, res) => categoriaController.update(req, res));
router.delete('/categoria/:id', (req, res) => categoriaController.delete(req, res));

module.exports = router;
