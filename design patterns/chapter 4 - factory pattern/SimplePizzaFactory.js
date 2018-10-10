import Pizza from './Pizza'
export default class SimplePizzaFactory {
    constructor() {
       
    }

    createPizza(type){
        switch(type){
            case 'cheese':
                return new Pizza();
            case 'pepperoni':
                return new Pizza();
            case 'clam':
                return new Pizza();
            case 'veggie':
                return new Pizza();
            default:
                return null;
        }
    }

}