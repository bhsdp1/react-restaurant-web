import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Snacksitemsdetailsaction } from '../actions/menuItemsActions';
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';

export default function Productdetails() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const snackItemsDetails = useSelector( state => state.snackItemsDetails);
    const {error, loading, snackitem} = snackItemsDetails;

    useEffect(() => {
        dispatch(Snacksitemsdetailsaction(id))
    }, [dispatch, id])

return (
    <>
    {loading? <Preloader class='preloader'/>:
            error? (
                <MessageBox variant='danger'>{error}</MessageBox>
            ):
    <div><img src={snackitem.image} alt={snackitem.name} /></div>}
    </>
)
}
