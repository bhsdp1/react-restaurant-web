import Axios  from "axios";
import { APPETIZER_MENU_FAIL, APPETIZER_MENU_REQUEST, APPETIZER_MENU_SUCCESS, BURGER_MENU_FAIL, BURGER_MENU_REQUEST, BURGER_MENU_SUCCESS, COCKTAIL_MENU_FAIL, COCKTAIL_MENU_REQUEST, COCKTAIL_MENU_SUCCESS, DESSERT_MENU_FAIL, DESSERT_MENU_REQUEST, DESSERT_MENU_SUCCESS, MAINMENU_MENU_FAIL, MAINMENU_MENU_REQUEST, MAINMENU_MENU_SUCCESS, PIZZA_MENU_FAIL, PIZZA_MENU_REQUEST, PIZZA_MENU_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, SEAFOOD_MENU_FAIL, SEAFOOD_MENU_REQUEST, SEAFOOD_MENU_SUCCESS, SNACKS_MENU_FAIL, SNACKS_MENU_REQUEST, SNACKS_MENU_SUCCESS } from "../constants/menItemsConstant";

export const SnacksMenuList = () => async(dispatch) => {
    dispatch({
        type: SNACKS_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/snacks');
        dispatch({type: SNACKS_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: SNACKS_MENU_FAIL, payload: error.message})
    }
}

export const AppetizerMenuList = () => async(dispatch) => {
    dispatch({
        type: APPETIZER_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/appetizer');
        dispatch({type: APPETIZER_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: APPETIZER_MENU_FAIL, payload: error.message})
    }
}

export const MainMenuList = () => async(dispatch) => {
    dispatch({
        type: MAINMENU_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/mainmenu');
        dispatch({type: MAINMENU_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: MAINMENU_MENU_FAIL, payload: error.message})
    }
}

export const PizzaMenuList = () => async(dispatch) => {
    dispatch({
        type: PIZZA_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/pizza');
        dispatch({type: PIZZA_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: PIZZA_MENU_FAIL, payload: error.message})
    }
}

export const DessertMenuList = () => async(dispatch) => {
    dispatch({
        type: DESSERT_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/dessert');
        dispatch({type: DESSERT_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: DESSERT_MENU_FAIL, payload: error.message})
    }
}

export const BurgerMenuList = () => async(dispatch) => {
    dispatch({
        type: BURGER_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/burger');
        dispatch({type: BURGER_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: BURGER_MENU_FAIL, payload: error.message})
    }
}

export const SeafoodMenuList = () => async(dispatch) => {
    dispatch({
        type: SEAFOOD_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/seafood');
        dispatch({type: SEAFOOD_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: SEAFOOD_MENU_FAIL, payload: error.message})
    }
}

export const CocktailMenuList = () => async(dispatch) => {
    dispatch({
        type: COCKTAIL_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/cocktail');
        dispatch({type: COCKTAIL_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: COCKTAIL_MENU_FAIL, payload: error.message})
    }
}

export const Productdetailsaction = (category, productId) => async(dispatch) => {
    dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
    try{
        const {data} = await Axios.get(`/api/${category}/${productId}`);
        dispatch({type : PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch(error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: 
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}