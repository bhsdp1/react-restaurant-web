import React from 'react'

export default function Cartrow(props) {
    const {cartItems , onAdd, onRemove} = props;
return (
    <>
    {cartItems.length === 0 ? <div> Cart is Empty </div> : false}
    {cartItems.map((item) => (
    <div className="row cart-item-row py-3" key={item.id}>
        <div className="cart-item-details col-8 pe-0 mt-1">
            <div className="cart-item-title pe-1 text-capitalize">{item.name}</div>
            <div className="cart-item-price fw-normal">{item.qty * item.price}</div>
            <div className="cart-item-quantity d-flex align-items-center justify-content-start py-2">
                <div className="minus-quantity" onClick={() => onRemove(item)}>
                    <i className="fa-solid fa-minus rounded-circle text-center d-flex justify-content-center align-items-center bg-danger text-white"></i>
                </div>
                <input type="number" name="quantity-display" className="quantity-display text-center bg-light" min="1" max="7" size="2" value={item.qty}/>
                <div className="plus-quantity" onClick={() => onAdd(item)}>
                    <i className="fa-solid fa-plus rounded-circle d-flex justify-content-center align-items-center  bg-danger text-white"></i>
                </div>
                <div className="cart-item-delete">
                    <i className="fa-solid fa-trash-can"></i>
                </div>
            </div>
        </div>
        <div className="cart-item-img col-4 ps-0 my-auto">
            <img src={item.image} alt={item.title} className="img-fluid rounded-2"/>
        </div>
    </div>))}
    </>
)
}
