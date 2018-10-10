export default class PizzaStoreWithSimpleFactory {
    constructor(factory) {
        this.factory = factory; // SimplePizzaFactory
    }

    orderPizza(type){
        pizza = factory.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.bake();

        return pizza;
    }
}