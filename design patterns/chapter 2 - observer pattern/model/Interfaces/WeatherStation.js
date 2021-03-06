import WeatherData from './Interfaces/WeatherDataa';
import CurrentConditionsDisplay from '../CurrentConditionsDisplayionsDisplay';
import ForecastDisplay from './Interfaces/ForecastDisplayy';

export default class WeatherStation {
    constructor(){
        this.weatherData = new WeatherData();
        this.currentConditionsDisplay = CurrentConditionsDisplay();
        this.forecastDisplay = ForecastDisplay();

        this.weatherData.registerObserver(this.currentConditionsDisplay);
        this.weatherData.registerObserver(this.forecastDisplay);
        
        this.weatherData.setMeasurements(77,.56,30.15);
        this.weatherData.setMeasurements(60,.56,40);
    }
}


