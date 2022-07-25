import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { menuCardReducer } from './reducers/menuCardReducers';

const initialState = {};
const reducer = combineReducers({
    homeCardList : menuCardReducer
})

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(thunk)));

export default store;