import FlyBehavior from '../Flying/FlyBehavior';

export default class Duck {
  constructor(flyBehavior, quackBehavior) {
    // this is an Abstract class
    if (new.target === Duck) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }

    // required overrides
    if (this.display === undefined) {
      throw new TypeError("Must override display method");
    }

    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  swim() {
    console.log('All ducks float, even decoys!');
  }

  performFly() {
    this.flyBehavior.fly();
  }

  performQuack() {
    this.quackBehavior.quack();
  }

}
