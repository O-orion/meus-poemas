/* eslint-disable import/extensions */
const Controller = require('./Controller.js');
const PoemaService = require('../services/PoemaService.js');

const poemaService = new PoemaService();

class PoemaController extends Controller {
  constructor() {
    super(poemaService, 'Poema');
  }
}

module.exports = PoemaController;
