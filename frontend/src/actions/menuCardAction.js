import Axios  from "axios";
import { HOMEMENU_CARD_FAIL, HOMEMENU_CARD_REQUEST, HOMEMENU_CARD_SUCCESS } from "../constants/menuCardConstant"

export const menuCardList = () => async(dispatch) => {
    dispatch({
        type: HOMEMENU_CARD_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/homemenucards');
        dispatch({type: HOMEMENU_CARD_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: HOMEMENU_CARD_FAIL, payload: error.message})
    }
}