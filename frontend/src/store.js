import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HomeMenuCardReducer, MenuPageCardReducer } from './reducers/menuCardReducers';
import { AppetizerItemsReducer, BurgerMenuItemsReducer, CocktailMenuItemsReducer, DessertMenuItemsReducer, MainMenuItemsReducer, PizzaMenuItemsReducer, Productdetailsreducer, SeafoodMenuItemsReducer, SnacksItemsReducer } from './reducers/menuItemsReducers';
import { cartReducer } from './reducers/Cartreducer';

const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    }
};
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
    ProductDetails : Productdetailsreducer,
    Cart : cartReducer,
})

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(thunk)));

export default store;