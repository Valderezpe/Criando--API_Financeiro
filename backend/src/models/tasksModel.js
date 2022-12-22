const connection = require ('./connection');

const getAll =  async () => {
  const cadastro = await connection.execute('SEELECT * FROM cadastro');
  return cadastro;
};

const createCad = async (cad)=> {
  const {title} = cad;

  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO cads(title, status, created_at) VALUES (?, ?, ?)';

  const [createCad] = await connection.execute(query, [title, 'pendente',dateUTC]);

  return {insertId: createCad};
};

module.exports ={
  getAll, 
  createCad
};
