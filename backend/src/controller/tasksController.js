const tasksModel = require('../models/tasksModel');

const getAll = async (req, res) => {
  const cadastro = await tasksModel.getAll();

  return res.status(200).json(cadastro);
};
const createCad = async (req, res)=>{
  const createCad = await tasksModel.createTasks(req.body);
  return req, res.status(200).json(createCad);

};
module.exports = {
  getAll,
  createCad
};
