"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.override = override;
// this override idea came from github: kyungwoon-ko/head-first-design-pattern/0. intro/duck.js
function override(methodName) {
  throw new TypeError("Must override " + methodName + " method!");
}