/* eslint-disable import/extensions */
const Controller = require('./Controller.js');
const ServiceUsuario = require('../services/UsuarioService.js');

const serviceUsuario = new ServiceUsuario();

class UsuarioController extends Controller {
  constructor() {
    super(serviceUsuario, 'Usuario');
  }
}

module.exports = UsuarioController;
