import {override} from '../ClassUtilities';

export default class AbstractPizzaStore {
    constructor(){
        // this is an Abstract class
        if (new.target === AbstractPizzaStore) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
    }

    orderPizza(type){
        const pizza = this.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }

    createPizza(type){
        override();
    }

}