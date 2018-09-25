"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlyBehavior = function FlyBehavior() {
  _classCallCheck(this, FlyBehavior);

  //console.log(this.fly);
  if (this.fly === undefined) {
    // or maybe test typeof this.method === "function"
    throw new TypeError("Must override fly method");
  }
};

exports.default = FlyBehavior;