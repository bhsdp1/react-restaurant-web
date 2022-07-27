import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HomeMenuCardReducer, MenuPageCardReducer } from './reducers/menuCardReducers';
import { AppetizerItemsReducer, BurgerMenuItemsReducer, DessertMenuItemsReducer, MainMenuItemsReducer, PizzaMenuItemsReducer } from './reducers/menuItemsReducers';

const initialState = {};
const reducer = combineReducers({
    homeCardList : HomeMenuCardReducer,
    menuCardlist : MenuPageCardReducer,
    burgerMenuList : BurgerMenuItemsReducer,
    appetizerMenuList : AppetizerItemsReducer,
    mainMenuList: MainMenuItemsReducer,
    pizzaMenuList: PizzaMenuItemsReducer,
    dessertMenuList : DessertMenuItemsReducer,
})

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(thunk)));

export default store;