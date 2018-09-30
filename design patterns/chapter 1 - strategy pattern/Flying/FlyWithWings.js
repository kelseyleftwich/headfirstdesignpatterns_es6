import FlyBehavior from './FlyBehavior';

export default class FlyWithWings extends FlyBehavior {
  constructor() {
    super();
  }

  fly() {
    console.log('I\'m flying!!');
  }
}
