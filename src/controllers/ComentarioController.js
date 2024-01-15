/* eslint-disable import/extensions */
const Controller = require('./Controller');
const ComentarioService = require('../services/ComentarioService.js');

const comentarioService = new ComentarioService();

class ComentarioController extends Controller {
  constructor() {
    super(comentarioService, 'Comentario');
  }
}

module.exports = ComentarioController;
