import Pizza from '../Pizza';

export default class NYStyleCheesePizza extends Pizza{
    constructor(){
        super();
        this.name = "NY Style Sauce and Cheese Pizza";
        this.dough = "Thin crust dough";
        this.sauce = "Marinara sauce";

        this.toppings = ["Grated Reggiano Cheese"];
    }
}