/* eslint-disable import/extensions */
/* eslint-disable import/no-useless-path-segments */
const express = require('express');
const usuarioRoutes = require('../routes/usuarioRouter.js');

module.exports = (app) => {
  app.use(
    express.json(),
    usuarioRoutes,
  );
};
