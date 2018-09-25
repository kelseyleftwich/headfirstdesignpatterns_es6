'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Duck = require('./Duck');

var _Duck2 = _interopRequireDefault(_Duck);

var _MallardDuck = require('./MallardDuck');

var _MallardDuck2 = _interopRequireDefault(_MallardDuck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DuckSimulator = function () {
  function DuckSimulator() {
    _classCallCheck(this, DuckSimulator);

    this.mallard = new _MallardDuck2.default();
  }

  _createClass(DuckSimulator, [{
    key: 'run',
    value: function run() {
      //this.mallard.display();
      this.mallard.performFly();
      //this.mallard.swim();
      this.mallard.performQuack();
    }
  }]);

  return DuckSimulator;
}();

exports.default = DuckSimulator;