import Axios  from "axios";
import { APPETIZER_MENU_FAIL, APPETIZER_MENU_REQUEST, APPETIZER_MENU_SUCCESS, BURGER_MENU_FAIL, BURGER_MENU_REQUEST, BURGER_MENU_SUCCESS, DESSERT_MENU_FAIL, DESSERT_MENU_REQUEST, DESSERT_MENU_SUCCESS, MAINMENU_MENU_FAIL, MAINMENU_MENU_REQUEST, MAINMENU_MENU_SUCCESS, PIZZA_MENU_FAIL, PIZZA_MENU_REQUEST, PIZZA_MENU_SUCCESS } from "../constants/menItemsConstant";


export const AppetizerMenuList = () => async(dispatch) => {
    dispatch({
        type: APPETIZER_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/appetizermenu');
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
        const { data } = await Axios.get('/api/pizzamenu');
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
        const { data } = await Axios.get('/api/dessertmenu');
        dispatch({type: DESSERT_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: DESSERT_MENU_FAIL, payload: error.message})
    }
}

export const BurgertMenuList = () => async(dispatch) => {
    dispatch({
        type: BURGER_MENU_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/burgermenu');
        dispatch({type: BURGER_MENU_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: BURGER_MENU_FAIL, payload: error.message})
    }
}