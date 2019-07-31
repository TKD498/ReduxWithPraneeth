import {createStore} from 'redux';
import rootReducer from './reducers';


const init = {}

const store = createStore(rootReducer, init);

export default store;