/* eslint-disable import/extensions */
const { Router } = require('express');
const ComentarioController = require('../controllers/ComentarioController.js');

const comentarioController = new ComentarioController();
const router = new Router();

router.get('/comentarios', (req, res) => comentarioController.getAll(req, res));
router.get('/comentario/:id', (req, res) => comentarioController.getById(req, res));
router.post('/comentario', (req, res) => comentarioController.create(req, res));
router.put('/comentario/:id', (req, res) => comentarioController.update(req, res));
router.delete('/comentario/:id', (req, res) => comentarioController.delete(req, res));

module.exports = router;
