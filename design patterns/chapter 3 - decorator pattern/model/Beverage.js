import override from '../../ClassUtilities';

export default class Beverage {
    constructor(){
        // this is an Abstract class
        if (new.target === Beverage) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }

        this.description = 'Unknown beverage';
    }

    getDescription() {
        return this.description;
    }

    cost() {
        override();
    }
}