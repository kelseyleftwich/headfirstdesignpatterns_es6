import Beverage from '../Beverage';

export default class HouseBlend extends Beverage {
    constructor(){
        super();
        this.description = 'HouseBlend';
    }

    cost() {
        return .89;
    }
}