import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HomeMenuCardReducer, MenuPageCardReducer } from './reducers/menuCardReducers';
import { AppetizerItemsReducer, BurgerMenuItemsReducer, CocktailMenuItemsReducer, DessertMenuItemsReducer, MainMenuItemsReducer, PizzaMenuItemsReducer, SeafoodMenuItemsReducer, Snacksitemsdetailsreducer, SnacksItemsReducer } from './reducers/menuItemsReducers';

const initialState = {};
const reducer = combineReducers({
    homeCardList : HomeMenuCardReducer,
    menuCardlist : MenuPageCardReducer,
    burgerMenuList : BurgerMenuItemsReducer,
    snacksMenuList : SnacksItemsReducer,
    appetizerMenuList : AppetizerItemsReducer,
    seafoodMenuList : SeafoodMenuItemsReducer,
    mainMenuList: MainMenuItemsReducer,
    pizzaMenuList: PizzaMenuItemsReducer,
    cocktailMenuList : CocktailMenuItemsReducer,
    dessertMenuList : DessertMenuItemsReducer,
    snackItemsDetails : Snacksitemsdetailsreducer,
})

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(thunk)));

export default store;