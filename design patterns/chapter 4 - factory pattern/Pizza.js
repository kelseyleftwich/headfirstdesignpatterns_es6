

export default class Pizza {
    constructor(){
        // this is an Abstract class
        if (new.target === Pizza) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }

        this.name = null;
        this.dough = null;
        this.sauce = null;
        this.toppings = [];
    }

    prepare() {
        console.log(`Preparing ${this.name}...`);
        console.log('Tossing dough...');
        console.log('Adding sauce...');
        console.log('Adding toppings...');
        this.toppings.map(topping => console.log(`+++ ${topping}`));
    }

    bake() {
        console.log('Baking pizza for 25 minutes at 350...');
    }

    cut() {
        console.log('Cutting pizza...');
    }

    box() {
        console.log('Placing pizza in official PizzaStore box...');
    }
}