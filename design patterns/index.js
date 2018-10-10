import prompt from 'prompt';
import boxen from 'boxen';
import DuckSimulator from './chapter 1 - strategy pattern/DuckSimulator';
import WeatherStation from './chapter 2 - observer pattern/model/WeatherStation';
import CoffeeHouse from './chapter 3 - decorator pattern/model/CoffeeHouse';
import NYPizzaStore from './chapter 4 - factory pattern/NYPizzaStore';

console.clear();

console.log(boxen('Head First Design Patterns', {padding: 1, borderColor: '#581845'}));

prompt.start();

prompt.get(['design_pattern'], function (err, result) {
    switch (result.design_pattern.toLowerCase()) {
        case 'strategy':
            console.log(boxen('Strategy', {padding: 1, borderColor: '#C70039'}));
            const duckSimulator = new DuckSimulator();
            duckSimulator.run();
            break;
        case 'observer':
            console.log(boxen('Observer', {padding: 1, borderColor: '#FFC300'}));
            const weatherStation = new WeatherStation();
            break;
        case 'decorator':
            console.log(boxen('Decorator', {padding: 1, borderColor: '#FFC300'}));
            const coffeeHouse = new CoffeeHouse();
            coffeeHouse.run();
            break;
        case 'factory':
            console.log(boxen('Factory', {padding: 1, borderColor: '#FFC300'}));
            const nyPizzaStore = new NYPizzaStore();
            const cheesePizza = nyPizzaStore.orderPizza('cheese');
            console.log(`Ordered a ${cheesePizza.name}`);
            console.log('\n');

            const pepperoniPizza = nyPizzaStore.orderPizza('pepperoni');
            console.log(`Ordered a ${pepperoniPizza.name}`);

            break;
        default:
            console.log(boxen('Not a design pattern!', {padding: 1, borderColor: '#581845'}));
            break;
    }

});