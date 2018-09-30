import prompt from 'prompt';
import boxen from 'boxen';
import DuckSimulator from './chapter 1 - strategy pattern/DuckSimulator';
import WeatherStation from './chapter 2 - observer pattern/model/WeatherStation';

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
        default:
            console.log(boxen('Not a design pattern!', {padding: 1, borderColor: '#581845'}));
            break;
    }

});