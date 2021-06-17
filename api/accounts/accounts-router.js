const router = require('express').Router()
const db = require('../data/dbConfig');

router.get('/api/', (req, res, next) => {
  knex('accounts')

  .then(accounts => {
    res.status(200).json(accounts)
  })
  .catch(err => res.status(500).json({ error:err }))
})

router.get('/api/:id', validateAccountId, (req, res) => {
  const id = req.params.id;
  knex('accounts')
  .where({ id: id })
  .then(account => {
      res.status(200).json(account);
  })
  .catch(err => res.status(500).json({ error: err }));
});

router.post('/api', validateAccount, (req, res) => {
  const account = req.body;
  knex('accounts')
  .insert(account)
  .then(response => {
      res.status(201).json(`Post created with id ${response}.`);
  })
  .catch(err => res.status(500).json({ error: err }));
});

router.put('/:id', validateAccountId, validateAccount, (req, res) => {
  const id = req.params.id;
  const update = req.body;
  knex('accounts')
  .where({ id: id })
  .update(update)
  .then(count => {
      res.status(200).json(`${count} record updated.`);
  })
  .catch(err => res.status(500).json({ error: err }));

router.delete('/api/:id', (req, res, next) => {
  db('accounts')
  .where({ id: req.params.id })
  .del()
  .then(count => res.status(200).json({ message: `Deleted records: ${count}` }))
  .catch(err => res.status(500).json({ message: 'Failed to get account' }))
})

router.use((err, req, res, next) => { 
   






});


});

module.exports = router;
