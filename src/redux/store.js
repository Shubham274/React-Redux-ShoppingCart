import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import shopReducer from './Shopping/shopping-reducer';

const store = createStore(shopReducer, composeWithDevTools());

export default store;
