import Subject from './Interfaces/Subject';

class WeatherData extends Subject {

    constructor(){
        super();
        this.observers = [];
        this.temperature = null;
        this.humidity = null;
        this.pressure = null;
    }

    registerObserver(observer){
        this.observers.push(observer);
    }

    removeObserver(observer){
        const filteredObservers = this.observers.filter(o => o !== observer);
        this.observers = filteredObservers;
    }

    notifyObservers(){
        console.log('notifying observers...');
        this.observers.map(o => {
            o.update({temperature: this.temperature, humidity: this.humidity, pressure: this.pressure});
        });
    }


    measurementsChanged() {
        this.notifyObservers();
    }

    setMeasurements(temperature, humidity, pressure){
        console.log('setting measurements...');
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }

    getPressure() {
        return this.pressure;
    }



}

export default WeatherData;