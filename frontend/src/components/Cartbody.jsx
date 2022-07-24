import Cartrow from './Cartrow';

const Cartbody = (props) => {
    const {cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 3000 ? 0 : 50;
    const totalPrice = itemsPrice + shippingPrice; 
    console.log(totalPrice);
return (
    <>
    <div className={`cart-${props.classToggle} bg-light fixed-top h-100 d-flex flex-column overflow-x-hidden`} id="cart-body" tabIndex='0' /*onBlur= {() => setCartToggle('hide')}*/>

        <header className="cart-header-container position-relative d-flex justify-content-between align-items-center px-3">
            <div className="cart-header text-white fw-bold d-flex align-items-center">Your Cart</div>
            <div className="item-count-container d-flex align-items-center me-auto text-white ms-2 fw-normal small">({cartItems.length} Items)</div>
            <div className="cart-close text-white justify-content-between" id="cart-close"><i className="fa-solid fa-xmark" onClick={props.toggleFunc}></i></div>
            <div className="cart-offer position-absolute bg-black text-white px-2 w-100">Get up to <span className="fw-bold">50%</span> off on your first order | <span className="fw-bold">FREE</span>  shipping over order value <span className="fw-bold">3000₹</span>. </div>
        </header>

        <div className="cart-item-container container-fluid overflow-x-hidden" id="cart-item-container">
            <Cartrow cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
        </div>
        {cartItems.length !== 0 &&
        <footer className="cart-total-container container-fluid bg-white px-4 py-3 d-flex flex-column mt-auto">

            <div className="shipping-amount d-flex justify-content-between align-items-center">
                <div className="shipping-label">Shipping Price :</div>
                <div className="shipping-price fw-normal">{shippingPrice}&#8377;</div>                        
            </div>

            <div className="total-amount d-flex justify-content-between align-items-center">
                <div className="total-label">Total Amount :</div>
                <div className="total-price fw-semibold" id="total-price">{totalPrice}&#8377;</div>                        
            </div>

        <button className="menu-order-btn d-inline-block text-center text-capitalize my-auto w-75 mx-auto">Check out</button>
        </footer>}

    </div>
    </>
)
}

export default Cartbody;