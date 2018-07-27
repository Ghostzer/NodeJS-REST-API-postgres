var db = require('./requetes');
var express = require('express');
var router = express.Router();


router.route('/')
  .get(db.getRoot);

router.route('/api/users')
  .get(db.getAllUsers)
  .post(db.createUser);

router.route('/api/user/:id')
  .get(db.getUser)
  .put(db.updateUser)
  .delete(db.removeUser);

module.exports = router;