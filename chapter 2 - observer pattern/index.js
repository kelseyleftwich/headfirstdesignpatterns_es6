import WeatherData from './model/WeatherData';
import CurrentConditionsDisplay from './model/CurrentConditionsDisplay';
import ForecastDisplay from './model/ForecastDisplay';

const weatherData = new WeatherData();

const currentConditionsDisplay = CurrentConditionsDisplay();
const forecastDisplay = ForecastDisplay();

weatherData.registerObserver(currentConditionsDisplay);
weatherData.registerObserver(forecastDisplay);

weatherData.setMeasurements(77,.56,30.15);

currentConditionsDisplay.display();
forecastDisplay.display();

weatherData.setMeasurements(60,.56,40);

currentConditionsDisplay.display();
forecastDisplay.display();




