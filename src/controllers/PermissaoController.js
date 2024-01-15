/* eslint-disable import/extensions */
const Controller = require('./Controller.js');
const PermissoesService = require('../services/PermissaoService.js');

const permissoesService = new PermissoesService();

class PermissoesController extends Controller {
  constructor() {
    super(permissoesService, 'Permissoes');
  }
}

module.exports = PermissoesController;
