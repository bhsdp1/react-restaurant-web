import { applyMiddleware, createStore } from 'redux';
import cardsdata from './data/Menucardsdata';
import itemsdata from './data/Menuitemsdata'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const reducer = (state, action) => {
    return {
        homemenucards : cardsdata.homeMenuCards,
        menupagecards : cardsdata.MenuPageCards,

        burgerright: itemsdata.burgerMenu.right,
        burgerleft: itemsdata.burgerMenu.left,

        pizzamenuleft : itemsdata.pizzaMenu.left,
        pizzamenuright : itemsdata.pizzaMenu.right,

        appitizzerleft : itemsdata.appetizer.left,
        appitizzerright : itemsdata.appetizer.right,

        mainmenuleft : itemsdata.mainMenu.left,
        mainmenuright : itemsdata.mainMenu.right,

        dessertleft: itemsdata.dessertMenu.left,
        dessertright: itemsdata.dessertMenu.right
} 
}

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(thunk)));

export default store;