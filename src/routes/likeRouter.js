/* eslint-disable import/extensions */
const { Router } = require('express');
const LikeController = require('../controllers/LikeController.js');

const likeController = new LikeController();
const router = new Router();

router.get('/likes', (req, res) => likeController.getAll(req, res));
router.get('/like/:id', (req, res) => likeController.getById(req, res));
router.post('/like', (req, res) => likeController.create(req, res));
router.put('/like/:id', (req, res) => likeController.update(req, res));
router.delete('/like/:id', (req, res) => likeController.delete(req, res));

module.exports = router;
