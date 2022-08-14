import React from 'react';
import '../assets/css/cart.css';
import '../assets/css/base.css';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import MessageBox from '../components/MessageBox';
import Preloader from '../components/Preloader';
import { detailsOrder } from '../actions/orderActions';


export default function OrderScreen() {
    const dispatch = useDispatch();
    const { id:orderId } = useParams();

    const orderDetails = useSelector((state) => state.orderDetails);
    const {order, loading, error} = orderDetails;

    useEffect(() => {
        dispatch(detailsOrder(orderId))
    }, [dispatch, orderId])
    
return loading? (
    <Preloader className='menu-preloader'/>
    ):error? (
    <MessageBox variant='danger'>{error}</MessageBox>
    ):(
    <>
        <main className="container-fluid mb-sm-0 pb-3 my-2">
            <div className="cart-container">
                <div className="row">

                <div className="order-details col-sm-12 col-md-7">

                    <div className="shipping-details mb-2">
                        <header className="shipping-details-title p-3 text-white">Order Details</header>

                        <div className="shipping-costumer-details p-2">
                        <div className="fs-normal py-1"><span className="fw-semibold">order id: </span>{order._id}</div>
                            <div className="fs-normal py-1"><span className="fw-semibold">Name: </span>{order.shippingAddress.fullName}</div>
                            <div className="fs-normal py-1">
                                <span className="fw-semibold">Payment Method: </span>{order.paymentMethod} 
                                <span className='fw-semibold ms-2'>
                                    Status: {order.isPaid? 
                                        (<span className='text-success fw-medium'>Paid at {order.paidAt}</span>)
                                        : 
                                        (<span className='text-danger fw-medium'>Not paid</span>)}
                                </span>
                            </div>
                            <address className="fs-normal py-1"><span className="fw-semibold">Address: </span>{order.shippingAddress.address}, {order.shippingAddress.landMark}, {order.shippingAddress.postalCode}</address>
                            {order.isDelivered? 
                            <MessageBox variant='success'>Delivered at: {order.deliveredAt}</MessageBox>
                            : 
                            <MessageBox variant='danger'>Not Delivered</MessageBox>
                        }
                        </div>
                    </div>

                    <main className="cart-body">

                        <header className="cart-title p-3">
                            <div className="text-white">Order
                                {order.orderItems.length > 0 
                                ? <span className='fs-6'>({order.orderItems.length} items)</span> 
                                : ''}
                            </div>
                        </header>
                        {order.orderItems.length === 0
                        ?<div className='container my-2 text-capitalize'><MessageBox>its Looks like your cart is empty!<Link to='/menu'> <span className='text-danger'>Go For Shopping <i className="fa-solid fa-angles-right"></i></span></Link></MessageBox></div>
                        :(
                        <main className="order-items-container">
                        {order.orderItems.map((item) => (
                        <article key={item.product} className="cart-row d-flex align-items-center justify-content-around py-2">
                                <div className="cart-product-image overflow-hidden rounded-3">
                                    <Link to={`/productdetails/${item.category}/${item.product}`}>
                                        <img src={item.image} alt={item.name} className="image-fluid rounded-3" title={item.name}/>
                                    </Link>
                                </div>
                                <div className="cart-product-details">
                                    <Link to={`/productdetails/${item.category}/${item.product}`}>
                                        <div className="cart-product-title">{item.name}</div>
                                    </Link>
                                    <div className="d-flex align-items-center justify-content-start gap-3 mt-1">
                                        <div className="cart-product-price" title='price'>{item.price}&#8377;</div>
                                        <Link to={`/${item.category}`}>
                                            <div className="cart-product-category px-2" title='category'>{item.category}</div>
                                        </Link>
                                    </div>
                                </div>
                                <div >
                                    <div className="text-center cart-product-price">{item.qty} x {item.price} = {item.qty * item.price}&#8377;</div>
                                </div>
                            </article>))}
                        </main>)}
                    </main>

                </div>

                    <footer className="col-sm-12 col-md-5">

                        <div className="cart-bill container py-3">
                            <div className="order-summary-title text-capitalize mb-1 p-2">Order Summary</div>
                            
                            <div className="shipping p-2 d-flex justify-content-between align-items-center">
                                <div className="shipping-title text-capitalize">Items:</div>
                                <div className="shipping-price">{order.itemsPrice}&#8377;</div>
                            </div>

                            <div className="shipping p-2 d-flex justify-content-between align-items-center">
                                <div className="shipping-title text-capitalize">Shipping:</div>
                                <div className="shipping-price">{order.shippingPrice}&#8377;</div>
                            </div>
                            <div className="total p-2 d-flex justify-content-between align-items-center">
                                <div className="total-title text-capitalize">total:</div>
                                <div className="total-price">{order.totalPrice}&#8377;</div>
                            </div>
                        </div>
                    </footer>

                </div>

            </div>

        </main>
    </>
)
}
