/* eslint-disable import/extensions */
const { Router } = require('express');
const PoemaController = require('../controllers/PoemaController.js');

const poemaController = new PoemaController();
const router = new Router();

router.get('/poemas', (req, res) => poemaController.getAll(req, res));
router.get('/poema/:id', (req, res) => poemaController.getById(req, res));
router.post('/poema', (req, res) => poemaController.create(req, res));
router.put('/poema/:id', (req, res) => poemaController.update(req, res));
router.delete('/poema/:id', (req, res) => poemaController.delete(req, res));

module.exports = router;
