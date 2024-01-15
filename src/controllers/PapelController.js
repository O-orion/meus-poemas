/* eslint-disable import/extensions */
const Controller = require('./Controller.js');
const PapelService = require('../services/PapelService.js');

const papelService = new PapelService();

class PapelController extends Controller {
  constructor() {
    super(papelService, 'Papel');
  }
}

module.exports = PapelController;
