import {override} from '../ClassUtilities'

export default class QuackBehavior {
  constructor() {
    
  }

  quack() {
    override('quack');
  }
}
