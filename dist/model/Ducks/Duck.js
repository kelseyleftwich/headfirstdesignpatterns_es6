'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ClassUtilities = require('../ClassUtilities');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Duck = function () {
  function Duck(flyBehavior, quackBehavior) {
    _classCallCheck(this, Duck);

    // this is an Abstract class
    if (new.target === Duck) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }

    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  _createClass(Duck, [{
    key: 'swim',
    value: function swim() {
      console.log('All ducks float, even decoys!');
    }
  }, {
    key: 'display',
    value: function display() {
      (0, _ClassUtilities.override)('display');
    }
  }, {
    key: 'performFly',
    value: function performFly() {
      this.flyBehavior.fly();
    }
  }, {
    key: 'performQuack',
    value: function performQuack() {
      this.quackBehavior.quack();
    }
  }]);

  return Duck;
}();

exports.default = Duck;