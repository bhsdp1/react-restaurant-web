import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HomeMenuCardReducer, MenuPageCardReducer } from './reducers/menuCardReducers';
import { AppetizerItemsReducer, BurgerMenuItemsReducer, CocktailMenuItemsReducer, DessertMenuItemsReducer, MainMenuItemsReducer, PizzaMenuItemsReducer, Productdetailsreducer, SeafoodMenuItemsReducer, SnacksItemsReducer } from './reducers/menuItemsReducers';
import { cartReducer } from './reducers/Cartreducer';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';
import { orderCreateReducer, orderDetailsReducer } from './reducers/orderReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
    Cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        shippingAddress: localStorage.getItem('shippingAddress') 
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},
        paymentMethod: 'PayPal',
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
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
})

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(thunk)));

export default store;