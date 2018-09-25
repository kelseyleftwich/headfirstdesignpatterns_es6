import QuackBehavior from './QuackBehavior';

export default class Quack extends QuackBehavior {
  constructor() {
    super();
  }

  quack() {
    console.log('Quack');
  }
}
