'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../controllers/users.js');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/').get(_users2.default.list).post(_users2.default.create);

router.route('/:userId').get(_users2.default.get).put(_users2.default.update).delete(_users2.default.remove);

router.param('userId', _users2.default.load);

exports.default = router;
module.exports = exports['default'];