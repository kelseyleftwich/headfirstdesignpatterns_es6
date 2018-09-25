import Duck from './Duck';
import FlyWithWings from '../Flying/FlyWithWings';
import Quack from '../Quacking/Quack';

export default class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display() {
    console.log('I\'m a real mallard duck!');
  }

}
