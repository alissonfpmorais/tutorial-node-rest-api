'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _tasks = require('../controllers/tasks.js');

var _tasks2 = _interopRequireDefault(_tasks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/').get(_tasks2.default.list).post(_tasks2.default.create);

router.route('/:taskId').get(_tasks2.default.get).put(_tasks2.default.update).delete(_tasks2.default.remove);

router.param('taskId', _tasks2.default.load);

exports.default = router;
module.exports = exports['default'];