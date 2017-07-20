'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('./config/express.js');

var _express2 = _interopRequireDefault(_express);

var _env = require('./config/env');

var _env2 = _interopRequireDefault(_env);

var _db = require('./config/db.js');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configure database
_db2.default.config();

// Start webserver
_express2.default.listen(_env2.default.port, function () {
  console.log('API Server started and listening on port ' + _env2.default.port + ' (' + _env2.default.env + ')');
});

exports.default = _express2.default;
module.exports = exports['default'];