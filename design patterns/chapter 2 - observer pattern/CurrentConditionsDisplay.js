import  Observer  from './Interfaces/Observer';
import  Display  from './Interfaces/Display';

const CurrentConditionsDisplay = () => {

    let state = {
        temperature: null,
        humidity: null,
        pressure: null
    };

    
    const display = (state) => {
        console.log('\n--------------------');
        console.log('Current Conditions: ')
        console.log(`Temperature: ${state.temperature}`);
        console.log(`Humidity: ${state.humidity}`);
        console.log(`Pressure: ${state.pressure}`);
        console.log('--------------------\n');
        
    }

    const update = (state, weatherData) => {
        console.log('updating state...')
        state.temperature = weatherData.temperature;
        state.humidity = weatherData.humidity;
        state.pressure = weatherData.pressure;
        display(state);
        return state;
    };

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
