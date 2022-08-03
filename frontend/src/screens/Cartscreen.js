import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { addToCart } from '../actions/Cartaction';

export default function Cartscreen() {
    // const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const {category: productCat, id: productId } = params;
    const { search } = useLocation();
    
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl ? Number(qtyInUrl) : 1;

    useEffect(() => {
      if(productId) {
        dispatch(addToCart(productCat, productId, qty))
      }
    }, [dispatch, productCat, productId, qty])
  return (
    <>
    <h1>Cartscreen</h1>
    <div>this is product id: {productId} this is product quantity : {qty}</div>
    </>
  )
}
