"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuackBehavior = function QuackBehavior() {
  _classCallCheck(this, QuackBehavior);

  //console.log(this.fly);
  if (this.quack === undefined) {
    // or maybe test typeof this.method === "function"
    throw new TypeError("Must override quack method");
  }
};

exports.default = QuackBehavior;