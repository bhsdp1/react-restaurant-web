import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Snacksitemsdetailsaction } from '../actions/menuItemsActions';
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';
import '../assets/css/menuitemdetails.css'
import Addtocartbtn from '../components/buttons/Addtocartbtn';

export default function Productdetails() {
    const dispatch = useDispatch();
    const params = useParams();
    const {id:snackitemId}  = params;
    const snackItemsDetails = useSelector( state => state.snackItemsDetails);
    const {error, loading, snackitem} = snackItemsDetails;

    useEffect(() => {
        dispatch(Snacksitemsdetailsaction(snackitemId))
    }, [dispatch, snackitemId])

return (
    <>
    {loading? <Preloader class='menu-preloader'/>:
            error? (
                <MessageBox variant='danger'>{error}</MessageBox>
            ):
    <div className="container-fluid 100-vh" >
        <div className="card mb-3 menu-detail-container mx-auto my-5 overflow-hidden">
            <img className="card-img-top menu-detail-image" src={snackitem.image} alt={snackitem.name}/>
            <div className="card-body bg-dark text-light ">
                <h5 className="card-title text-white">{snackitem.price}&#8377;</h5>
                <h5 className="card-title menu-detail-title">{snackitem.name}</h5>
                <p className="card-text">{snackitem.text}</p>
                <div className='menu-detial-select d-flex justify-content-around align-items-center my-3'>
                    <div>Please select quantity :</div>
                    <select className='p-1 rounded form-control text-center menu-detail-select' id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                    </select>
                </div>
                <div className="d-flex justify-content-center my-2">
                <Addtocartbtn content='Add to cart'></Addtocartbtn>
                </div>
            </div>
        </div>
    </div>}
    </>
)
}
