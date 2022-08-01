import React, { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Productdetailsaction } from '../actions/menuItemsActions';
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';
import '../assets/css/menuitemdetails.css'
import '../assets/css/base.css'
import Addtocartbtn from '../components/buttons/Addtocartbtn';

export default function Productdetails() {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const {category: productcat,id:productId}  = params;
    const ProductDetails = useSelector( state => state.ProductDetails);
    const {error, loading, product} = ProductDetails;

    useEffect(() => {
        dispatch(Productdetailsaction(productcat, productId))
    }, [dispatch,productcat, productId])

    const [gty, setgty] = useState(1)

    const addTOCart = () => {
        navigate(`/cart/${productId}?qty=${gty}`);
    }
return (
    <>
    {loading? <Preloader class='menu-preloader'/>:
            error? (
                <MessageBox variant='danger'>{error}</MessageBox>
            ):
    <div className="container-fluid 100-vh" >
        <div className="card mb-3 menu-detail-container mx-auto my-5 overflow-hidden">
            <img className="card-img-top menu-detail-image" src={product.image} alt={product.name}/>
            <div className="card-body bg-dark text-light ">
                <h5 className="card-title text-white">{product.price}&#8377;</h5>
                <h5 className="card-title menu-detail-title">{product.name}</h5>
                <p className="card-text">{product.text}</p>
                <div className='menu-detial-select d-flex justify-content-around align-items-center my-3'>
                    <div>Please select quantity :</div>
                    <input type="number" id="menu-detail-gty" className='text-center' value={gty} onChange ={e => {setgty(e.target.value)}}/>
                </div>
                <div className="d-flex justify-content-center my-2">
                <Addtocartbtn content='Add to cart' onClick={addTOCart}/>
                </div>
            </div>
        </div>
    </div>}
    </>
)
}
