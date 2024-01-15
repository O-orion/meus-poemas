class Controller {
  constructor(entidadeService, model) {
    this.model = model;
    this.service = entidadeService;
  }

  async getAll(req, res) {
    try {
      const dados = await this.service.getAll();
      return res.status(200).json(dados);
    } catch (error) {
      return res.status(400).json({ mensagem: 'Ocorreu um erro ao buscar as informações!' });
    }
  }

  async getById(req, res) {
    const id = Number(req.params.id);

    try {
      const dado = await this.service.getById(id);
      return res.status(200).json(dado);
    } catch (error) {
      return res.status(400).json({ mensagem: 'Ocorreu um erro ao buscar as informações!' });
    }
  }

  async create(req, res) {
    const dados = req.body;
    console.log(dados);
    try {
      const created = await this.service.create(dados);
      return res.status(201).json(created);
    } catch (error) {
      console.log(error);
      return res.status(403).json({ mensagem: 'Ocorreu um erro ao cadastrar' });
    }
  }

  async update(req, res) {
    const dados = req.body;
    const id = Number(req.params.id);

    try {
      const dado = await this.service.update(dados, id);
      return res.status(200).json(dado);
    } catch (error) {
      return res.status(400).json({ mensagem: 'Ocorreu um erro ao atualizar as informações' });
    }
  }

  async delete(req, res) {
    const id = Number(req.params.id);

    try {
      await this.service.delete(id);
      res.status(200).json({ mensagem: 'Excluido com sucesso!' });
    } catch (error) {
      res.status(400).json({ mensagem: `Ocorreu um erro ao excluir este ${this.model}` });
    }
  }
}

module.exports = Controller;
