import Beverage from '../Beverage';

export default class DarkRoast extends Beverage {
    constructor(){
        super();
        this.description = 'DarkRoast';
    }

    cost() {
        return .99;
    }
}