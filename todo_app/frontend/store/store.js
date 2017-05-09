import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer.js';
import thunk from '../middleware/thunk';

const configureStore = createStore(rootReducer, {}, applyMiddleware(thunk));

export default configureStore;
