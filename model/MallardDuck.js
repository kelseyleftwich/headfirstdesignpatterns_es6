import Duck from './Duck';
import FlyWithWings from './FlyWithWings';
import Quack from './Quack';

export default class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display() {
    console.log('I\'m a real mallard duck!');
  }

}
