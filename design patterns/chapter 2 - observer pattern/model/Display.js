import {override} from '../ClassUtilities';


const Display = (state, display) => ({
    display: () => {
        if(typeof display === 'function') {
            display(state)
        } else {
            override();
        }
    }
});

export default Display;