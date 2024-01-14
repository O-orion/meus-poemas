/* eslint-disable import/extensions */
const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController.js');

const usuarioController = new UsuarioController();
const router = new Router();

router.get('/usuarios', (req, res) => usuarioController.getAll(req, res));
router.get('/usuario/:id', (req, res) => usuarioController.getById(req, res));
router.post('/usuario', (req, res) => usuarioController.create(req, res));
router.put('/usuario/:id', (req, res) => usuarioController.update(req, res));
router.delete('/usuario/:id', (req, res) => usuarioController.delete(req, res));

module.exports = router;
