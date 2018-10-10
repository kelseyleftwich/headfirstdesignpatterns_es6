import AbstractPizzaStore from './AbstractPizzaStore';
import NYStyleCheesePizza from './NYStylePizzas/NYStyleCheesePizza';
import NYStylePepperoniPizza from './NYStylePizzas/NYStylePepperoniPizza';

export default class NYPizzaStore extends AbstractPizzaStore {
    constructor() {
        super();
    }
    
    createPizza(type){
        switch(type){
            case 'cheese':
                return new NYStyleCheesePizza();
            case 'pepperoni':
                return new NYStylePepperoniPizza();
            default:
                throw TypeError(`No NY Style Pizza for type ${type}.`);
        }
    }
}