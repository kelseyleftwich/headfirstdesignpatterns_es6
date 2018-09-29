import WeatherData from './model/WeatherData';
import CurrentConditionsDisplay from './model/CurrentConditionsDisplay';

const weatherData = new WeatherData();

const currentConditionsDisplay = CurrentConditionsDisplay();

weatherData.registerObserver(currentConditionsDisplay);
weatherData.setMeasurements(77,.56,30.15);

currentConditionsDisplay.display();

weatherData.setMeasurements(73,.56,30.15);
weatherData.setMeasurements(60,.56,30.15);

currentConditionsDisplay.display();


