import { APPETIZER_MENU_FAIL, APPETIZER_MENU_REQUEST, APPETIZER_MENU_SUCCESS, BURGER_MENU_FAIL, BURGER_MENU_REQUEST, BURGER_MENU_SUCCESS, COCKTAIL_MENU_FAIL, COCKTAIL_MENU_REQUEST, COCKTAIL_MENU_SUCCESS, DESSERT_MENU_FAIL, DESSERT_MENU_REQUEST, DESSERT_MENU_SUCCESS, MAINMENU_MENU_FAIL, MAINMENU_MENU_REQUEST, MAINMENU_MENU_SUCCESS, PIZZA_MENU_FAIL, PIZZA_MENU_REQUEST, PIZZA_MENU_SUCCESS, SEAFOOD_MENU_FAIL, SEAFOOD_MENU_REQUEST, SEAFOOD_MENU_SUCCESS, SNACKS_MENU_DETAILS_FAIL, SNACKS_MENU_DETAILS_REQUEST, SNACKS_MENU_DETAILS_SUCCESS, SNACKS_MENU_FAIL, SNACKS_MENU_REQUEST, SNACKS_MENU_SUCCESS } from "../constants/menItemsConstant";

export const SnacksItemsReducer = (state = {loading :true, snacksmenu:[]}, action) => {
    switch(action.type) {
        case SNACKS_MENU_REQUEST:
            return {loading : true};
        case SNACKS_MENU_SUCCESS:
            return{loading : false,  snacksmenu : action.payload};
        case SNACKS_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const AppetizerItemsReducer = (state = {loading :true, appetizermenu:[]}, action) => {
    switch(action.type) {
        case APPETIZER_MENU_REQUEST:
            return {loading : true};
        case APPETIZER_MENU_SUCCESS:
            return{loading : false,  appetizermenu : action.payload};
        case APPETIZER_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const MainMenuItemsReducer = (state = {loading :true, mainmenu:[]}, action) => {
    switch(action.type) {
        case MAINMENU_MENU_REQUEST:
            return {loading : true};
        case MAINMENU_MENU_SUCCESS:
            return{loading : false,  mainmenu : action.payload};
        case MAINMENU_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const PizzaMenuItemsReducer = (state = {loading :true, pizzamenu:[]}, action) => {
    switch(action.type) {
        case PIZZA_MENU_REQUEST:
            return {loading : true};
        case PIZZA_MENU_SUCCESS:
            return{loading : false,  pizzamenu : action.payload};
        case PIZZA_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const DessertMenuItemsReducer = (state = {loading :true, dessertmenu:[]}, action) => {
    switch(action.type) {
        case DESSERT_MENU_REQUEST:
            return {loading : true};
        case DESSERT_MENU_SUCCESS:
            return{loading : false,  dessertmenu : action.payload};
        case DESSERT_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const BurgerMenuItemsReducer = (state = {loading :true, burgermenu:[]}, action) => {
    switch(action.type) {
        case BURGER_MENU_REQUEST:
            return {loading : true};
        case BURGER_MENU_SUCCESS:
            return{loading : false,  burgermenu : action.payload};
        case BURGER_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const SeafoodMenuItemsReducer = (state = {loading :true, seafoodmenu:[]}, action) => {
    switch(action.type) {
        case SEAFOOD_MENU_REQUEST:
            return {loading : true};
        case SEAFOOD_MENU_SUCCESS:
            return{loading : false,  seafoodmenu : action.payload};
        case SEAFOOD_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const CocktailMenuItemsReducer = (state = {loading :true, cocktailmenu:[]}, action) => {
    switch(action.type) {
        case COCKTAIL_MENU_REQUEST:
            return {loading : true};
        case COCKTAIL_MENU_SUCCESS:
            return{loading : false,  cocktailmenu : action.payload};
        case COCKTAIL_MENU_FAIL: 
            return{loading: false, error: action.payload}
        default :
            return state;
    }
}

export const Snacksitemsdetailsreducer = (
    state ={snackitem:{}, loading: true}, 
    action
    ) => {
    switch (action.type) {
        case SNACKS_MENU_DETAILS_REQUEST:
            return {loading : true};
        case SNACKS_MENU_DETAILS_SUCCESS:
            return {loading :false, snackitem: action.payload}
        case SNACKS_MENU_DETAILS_FAIL:
            return {loading : false, error: action.payload}
        default:
            return state;
    }
}