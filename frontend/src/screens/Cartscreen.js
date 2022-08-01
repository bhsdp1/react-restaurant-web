import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function Cartscreen() {
    // const navigate = useNavigate();
    const params = useParams();
    const { id: productId } = params;
  
    const { search } = useLocation();
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl ? Number(qtyInUrl) : 1;
  
  return (
    <>
    <h1>Cartscreen</h1>
    <div>this is product id: {productId} this is product quantity : {qty}</div>
    </>
  )
}
