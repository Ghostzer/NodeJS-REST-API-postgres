var promise = require('bluebird');
var options = { promiseLib: promise };
var pgp = require('pg-promise')(options);

let dbUser = 'postgres';
let dbPass = 'demo';
let dbIp = '127.0.0.1';
let dbPort = '5432';
let dbDatabase = 'postgres';

var connectionString = 'postgres://' + dbUser + ':' + dbPass + '@' + dbIp + ':' + dbPort + '/' + dbDatabase;
var db = pgp(connectionString);


function getRoot(req, res, next) {
  res.status(200)
    .json({
      status: 'ok',
      message: 'ok'
    });
}

function getAllUsers(req, res, next) {
  db.any('SELECT * FROM users')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'ok',
          data: data,
          message: 'Users list'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getUser(req, res, next) {
  var id = parseInt(req.params.id);
  db.one('SELECT * FROM users WHERE ID = ' + id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'ok',
          data: data
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createUser(req, res, next) {
  db.none('INSERT INTO users(firstname, lastname, city, address) VALUES(${firstname}, ${lastname}, ${city}, ${address})', req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'ok',
          message: 'User created'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function updateUser(req, res, next) {
  var id = parseInt(req.params.id);
  db.none('UPDATE users SET firstname = ${firstname}, lastname = ${lastname}, city = ${city}, address = ${address} where ID = ' + id, req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'ok',
          message: 'User modified'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeUser(req, res, next) {
  var id = parseInt(req.params.id);
  db.result('DELETE FROM users WHERE ID = ' + id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'ok',
          message: 'User deleted'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
    getRoot: getRoot,
    getAllUsers: getAllUsers,
    getUser: getUser,
    createUser: createUser,
    updateUser: updateUser,
    removeUser: removeUser
};
