/* eslint-disable import/extensions */
const app = require('./src/app.js');

const PORT = 9900;

app.listen(PORT, () => {
  console.log(`Servido rodando na porta: ${PORT}`);
});
