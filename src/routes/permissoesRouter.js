const { Router } = require('express');
// eslint-disable-next-line import/extensions
const PermissoesController = require('../controllers/PermissaoController.js');

const permissoesController = new PermissoesController();
const router = new Router();

router.get('/permissoes', (req, res) => permissoesController.getAll(req, res));
router.get('/permissao/:id', (req, res) => permissoesController.getById(req, res));
router.post('/permissao', (req, res) => permissoesController.create(req, res));
router.put('/permissao/:id', (req, res) => permissoesController.update(req, res));
router.delete('/permissao/:id', (req, res) => permissoesController.delete(req, res));

module.exports = router;
