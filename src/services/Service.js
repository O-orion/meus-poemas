/* eslint-disable object-shorthand */
/* eslint-disable key-spacing */
const database = require('../models/index');

class Service {
  constructor(nomeModel) {
    this.model = nomeModel;
  }

  async getAll() {
    const dados = await database[this.model].findAll();
    return dados;
  }

  async getById(id) {
    const dado = await database[this.model].findByPk(id);
    return dado;
  }

  async create(dto) {
    const created = await database[this.model].create(dto);
    return created;
  }

  async update(dto, id) {
    const update = database[this.model].update(dto, {
      where: {
        id: id,
      },
    });

    return update;
  }

  async delete(id) {
    const succeful = await database[this.model].destroy({
      where: {
        id: id,
      },
    });
    return succeful;
  }
}

module.exports = Service;
