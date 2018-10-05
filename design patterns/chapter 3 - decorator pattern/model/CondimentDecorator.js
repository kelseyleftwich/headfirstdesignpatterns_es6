import override from '../../ClassUtilities';
import Beverage from './Beverage';

export default class CondimentDecorator extends Beverage {
    constructor(){
        super();
        // this is an Abstract class
        if (new.target === CondimentDecorator) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }

    getDescription(){
        override();
    }
}