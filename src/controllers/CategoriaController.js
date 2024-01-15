/* eslint-disable import/extensions */
const Controller = require('./Controller.js');
const CategoriaService = require('../services/CategoriaService.js');

const categoriaService = new CategoriaService();

class CategoriaController extends Controller {
  constructor() {
    super(categoriaService, 'Categoria');
  }
}

module.exports = CategoriaController;
