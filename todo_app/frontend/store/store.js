import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer.js';

const configureStore = createStore(rootReducer);

export default configureStore;
