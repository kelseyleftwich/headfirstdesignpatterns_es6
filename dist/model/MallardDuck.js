'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Duck2 = require('./Duck');

var _Duck3 = _interopRequireDefault(_Duck2);

var _FlyWithWings = require('./FlyWithWings');

var _FlyWithWings2 = _interopRequireDefault(_FlyWithWings);

var _Quack = require('./Quack');

var _Quack2 = _interopRequireDefault(_Quack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MallardDuck = function (_Duck) {
  _inherits(MallardDuck, _Duck);

  function MallardDuck() {
    _classCallCheck(this, MallardDuck);

    return _possibleConstructorReturn(this, (MallardDuck.__proto__ || Object.getPrototypeOf(MallardDuck)).call(this, new _FlyWithWings2.default(), new _Quack2.default()));
  }

  _createClass(MallardDuck, [{
    key: 'display',
    value: function display() {
      console.log('I\'m a real mallard duck!');
    }
  }]);

  return MallardDuck;
}(_Duck3.default);

exports.default = MallardDuck;