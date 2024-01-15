/* eslint-disable import/extensions */
const Controller = require('./Controller.js');
const LikeService = require('../services/LikeService.js');

const likeService = new LikeService();

class LikeController extends Controller {
  constructor() {
    super(likeService, 'Like');
  }
}

module.exports = LikeController;
