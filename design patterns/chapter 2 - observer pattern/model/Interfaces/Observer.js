import {override} from '../ClassUtilities';


const Observer = (state, update) => ({
    update: (weatherStats) => {
        if(typeof update === 'function') {
            state = update(state, weatherStats)
        } else {
            override();
        }
    }
});

export default Observer;