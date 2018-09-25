// this override idea came from github: kyungwoon-ko/head-first-design-pattern/0. intro/duck.js
export function override(methodName) {
  throw new TypeError(`Must override ${methodName} method!`)
}
