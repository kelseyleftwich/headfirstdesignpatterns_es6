import  Observer  from './Interfaces/Observer';
import  Display  from './Interfaces/Display';

const ForecastDisplay = () => {
    let state = {
        currentPressure: null,
        previousPressure: null
    };

    const display = (state) => {
        console.log('\n--------------------');
        console.log('Forecast: ')
        const {currentPressure, previousPressure} = state;
        if(previousPressure == null){
            console.log('Not enough data!');
        }
        else if (currentPressure > previousPressure) {
			console.log("Improving weather on the way!");
		} else if (currentPressure == previousPressure) {
			console.log("More of the same");
		} else if (currentPressure < previousPressure) {
			console.log("Watch out for cooler, rainy weather");
		}
        console.log('--------------------\n');
    }

    const update = (state, weatherData) => {
        console.log('updating state...')
        state.previousPressure = state.currentPressure;
        state.currentPressure = weatherData.pressure;
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

export default ForecastDisplay;
