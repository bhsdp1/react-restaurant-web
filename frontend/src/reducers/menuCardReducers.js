import { HOMEMENU_CARD_FAIL, HOMEMENU_CARD_REQUEST, HOMEMENU_CARD_SUCCESS } from "../constants/menuCardConstant";

export const menuCardReducer =(state = {homecards: []}, action) => {
    switch(action.type) {
        case HOMEMENU_CARD_REQUEST :
            return {loading: true};
        case HOMEMENU_CARD_SUCCESS :
            return {loading: false, homecards: action.payload};
        case HOMEMENU_CARD_FAIL :
            return{loading: false, error: action.payload}
        default :
            return state
    }
}