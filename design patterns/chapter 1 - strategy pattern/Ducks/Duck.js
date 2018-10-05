import {override} from '../../ClassUtilities';

export default class Duck {
  constructor(flyBehavior, quackBehavior) {
    // this is an Abstract class
    if (new.target === Duck) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }

    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  swim() {
    console.log('All ducks float, even decoys!');
  }

  display(){
    override('display');
  }

  performFly() {
    this.flyBehavior.fly();
  }

  performQuack() {
    this.quackBehavior.quack();
  }

}
