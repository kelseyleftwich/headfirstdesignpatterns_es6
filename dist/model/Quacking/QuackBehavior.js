'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ClassUtilities = require('../ClassUtilities');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuackBehavior = function () {
  function QuackBehavior() {
    _classCallCheck(this, QuackBehavior);
  }

  _createClass(QuackBehavior, [{
    key: 'quack',
    value: function quack() {
      (0, _ClassUtilities.override)('quack');
    }
  }]);

  return QuackBehavior;
}();

exports.default = QuackBehavior;