/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    dataNasc: DataTypes.DATEONLY,
    sexo: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    foto: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios'
  });
  return Usuario;
};