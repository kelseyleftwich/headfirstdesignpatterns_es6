import Pizza from '../Pizza';
export default class NYStylePepperoniPizza extends Pizza{
    constructor(){
        super();
        this.name = "NY Style Pepperoni Pizza";
        this.dough = "Thin crust dough";
        this.sauce = "Marinara sauce";

        this.toppings = ["Grated Reggiano Cheese", "Mushrooms", "Onions", "Red Peppers", "Pepperoni"];
    }
}