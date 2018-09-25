import Duck from './Duck';
import MallardDuck from './MallardDuck';

export default class DuckSimulator {
  constructor() {
     this.mallard = new MallardDuck();

  }

  run() {
    //this.mallard.display();
    this.mallard.performFly();
    //this.mallard.swim();
    this.mallard.performQuack();

  }
}
