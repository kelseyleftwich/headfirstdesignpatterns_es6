import  Observer  from './Interfaces/Observer';
import  Display  from './Interfaces/Display';

const CurrentConditionsDisplay = () => {

    let state = {
        temperature: null,
        humidity: null,
        pressure: null
    };

    const update = (state, weatherData) => {
        console.log('updating state...')
        state.temperature = weatherData.temperature;
        state.humidity = weatherData.humidity;
        state.pressure = weatherData.pressure;
        return state;
    };

    const display = (state) => {
        console.log('\n--------------------');
        console.log('Current Conditions: ')
        console.log(`Temperature: ${state.temperature}`);
        console.log(`Humidity: ${state.humidity}`);
        console.log(`Pressure: ${state.pressure}`);
        console.log('--------------------\n');

    }

    return Object.assign(
        {},
        state, 
        Display(
            state,
            display
        ),
        Observer(
            state,
            update
        )
    )
}

export default CurrentConditionsDisplay;
