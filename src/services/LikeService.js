/* eslint-disable import/extensions */
const Service = require('./Service.js');

class LikeService extends Service {
  constructor() {
    super('Likes');
  }
}

module.exports = LikeService;
