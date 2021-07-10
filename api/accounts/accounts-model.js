const db = require('../../data/db-config')
const getAll = () => {
  // DO YOUR MAGIC
  const accounts = db('accounts');
  return accounts
  
}

const getById = id => {
  // DO YOUR MAGIC
  const account = db('accounts').where({id});
}

const create = account => {
  // DO YOUR MAGIC
  const newAccnt = db('accounts').insert(account);
  return newAccnt;
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  return db('accounts').update(account).where({id});
}

const deleteById = id => {
  // DO YOUR MAGIC
  return db('accounts').del().where({id});
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
