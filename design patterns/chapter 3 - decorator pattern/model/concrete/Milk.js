import CondimentDecorator from '../CondimentDecorator';

export default class Milk extends CondimentDecorator {
    constructor(beverage){
        super();
        this.beverage = beverage;
    }

    getDescription() {
        return this.beverage.getDescription() + ", Milk";
    }

    cost(){
        return this.beverage.cost() + .10;
    }
}