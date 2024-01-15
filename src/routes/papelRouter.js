/* eslint-disable import/extensions */
const { Router } = require('express');
const PapelController = require('../controllers/PapelController.js');

const papelController = new PapelController();
const router = new Router();

router.get('/papeis', (req, res) => papelController.getAll(req, res));
router.get('/papel/:id', (req, res) => papelController.getById(req, res));
router.post('/papel', (req, res) => papelController.create(req, res));
router.put('/papel/:id', (req, res) => papelController.update(req, res));
router.delete('/papel/:id', (req, res) => papelController.delete(req, res));

module.exports = router;
