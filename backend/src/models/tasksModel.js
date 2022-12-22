const connection = require ('./connection');

const getAll =  async () => {
  const cadastro = await connection.execute('SEELECT * FROM cadastro');
  return cadastro;
};

module.exports ={
  getAll
};
