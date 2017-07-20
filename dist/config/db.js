'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _env = require('./env');

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = {
  config: function config() {
    // Connect
    _mongoose2.default.connect(_env2.default.db);

    // On connection error
    _mongoose2.default.connection.on('error', function () {
      throw new Error('Unable to connect to database: ' + _env2.default.db);
    });

    // On connection successful
    _mongoose2.default.connection.on('connected', function () {
      console.log('Connected to database: ' + _env2.default.db);
    });

    // If development environment, set mongo to debug mode
    if (_env2.default.env == 'development') _mongoose2.default.set('debug', true);
  }
};

exports.default = db;
module.exports = exports['default'];