import CondimentDecorator from '../CondimentDecorator';

export default class Soy extends CondimentDecorator {
    constructor(beverage){
        super();
        this.beverage = beverage;
    }

    getDescription() {
        return this.beverage.getDescription() + ", Soy";
    }

    cost(){
        return this.beverage.cost() + .15;
    }
}