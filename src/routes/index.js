/* eslint-disable import/extensions */
/* eslint-disable import/no-useless-path-segments */
const express = require('express');
const usuarioRoutes = require('../routes/usuarioRouter.js');
const poemaRoutes = require('./poemaRouter.js');
const categoriaRoutes = require('./categoriaRouter.js');
const comentarioRoutes = require('./comentarioRoutes.js');
const papeisRoutes = require('./papelRouter.js');
const likeRoutes = require('./likeRouter.js');
const permissaoRoutes = require('./permissoesRouter.js');

module.exports = (app) => {
  app.use(
    express.json(),
    usuarioRoutes,
    poemaRoutes,
    categoriaRoutes,
    comentarioRoutes,
    papeisRoutes,
    likeRoutes,
    permissaoRoutes,
  );
};
