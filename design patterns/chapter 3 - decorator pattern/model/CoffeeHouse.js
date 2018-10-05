import Beverage from './Beverage';
import CondimentDecorator from './CondimentDecorator';
import Espresso from './concrete/Espresso';
import HouseBlend from './concrete/HouseBlend';
import Mocha from './concrete/Mocha';
import Soy from './concrete/Soy';
import Milk from './concrete/Milk';
import Whip from './concrete/Whip';

export default class CoffeeHouse {
    constructor(){
        console.log('Welcome to StarBuzz!');
    }
    run(){
        //const beverage = new Beverage(); - uncomment to see abstract class TypeError
        //const condiment = new CondimentDecorator();

        const espresso = new Espresso();
        console.log(espresso.getDescription(), espresso.cost());

        const mocha = new Mocha(new Espresso);
        console.log(mocha.getDescription(), mocha.cost());

        const houseBlendWithMilk = new Milk(new HouseBlend);
        console.log(houseBlendWithMilk.getDescription(), houseBlendWithMilk.cost());

        const mochaWithWhip = new Whip(new Mocha(new Espresso));
        console.log(mochaWithWhip.getDescription(), mochaWithWhip.cost());
    }
}