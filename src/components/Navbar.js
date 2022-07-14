import React, { useState } from 'react';
import "../css/navbar.css";
import '../css/base.css';
import { Outlet , Link } from "react-router-dom";

export default function Navbar(props) {

    //function for cart toggle
    const [cartToggle, setCartToggle] = useState('hide')
    let cartToggler =() => {
        if (cartToggle === 'hide') {
            setCartToggle('show')
        } else {
            setCartToggle('hide')
        }
    }

    // function for menu toggle
    const [menuToggle, setMenuToggle] = useState('hide')
    let menuToggler =() => {
        if (menuToggle === 'hide') {
            setMenuToggle('show')
        } else {
            setMenuToggle('hide')
        }
    }

    // remove the offcanvas when user click on nav-link
    const navHide = () => {setMenuToggle('hide')}

    return (
    <>
    <header className="header container-fluid bg-black">
        <nav className="nav-bar d-flex align-items-center justify-content-between">

            <div className="brand-logo rounded-circle" title="brand logo">
                <Link to="/">
                    <img src="https://sohampurao.github.io/Restaurent-web/images/common/res-logo.jpg" alt="restaurent logo" className="img-fluid rounded-circle"/>
                </Link>
            </div>

            <div className="brand-name text-capitalize me-auto ms-2 text-white" title="brand name">
                <Link to="/">
                    {props.title}
                </Link>
            </div>

            <div className="cart-icon text-white me-3" title="Order Cart" id="cart-icon">
                <i className="fa-solid fa-cart-shopping position-relative" onClick={cartToggler}>
                    <span className="cart-item-count cart-bubble position-absolute text-center"></span>
                </i>
            </div>

            <div className={`cart-${cartToggle} bg-light fixed-top h-100 d-flex flex-column overflow-x-hidden`} id="cart-body" tabIndex='0' onBlur= {() => setCartToggle('hide')}>

                <header className="cart-header-container position-relative d-flex justify-content-between align-items-center px-3">
                    <div className="cart-header text-white fw-bold d-flex align-items-center">Your Cart</div>
                    <div className="item-count-container d-flex align-items-center me-auto text-white ms-2 fw-normal small">(<div className="cart-item-count"></div> Items)</div>
                    <div className="cart-close text-white justify-content-between" id="cart-close"><i className="fa-solid fa-xmark" onClick={cartToggler}></i></div>
                    <div className="cart-offer position-absolute bg-black text-white px-2 w-100">Get up to <span className="fw-bold">50%</span> off on your first order | <span className="fw-bold">FREE</span>  shipping over order value <span className="fw-bold">3000₹</span>. </div>
                </header>

                <div className="cart-item-container container-fluid overflow-x-hidden" id="cart-item-container">
                </div>

                <footer className="cart-total-container container-fluid bg-white px-4 py-3 d-flex flex-column mt-auto">

                    <div className="shipping-amount d-flex justify-content-between align-items-center">
                        <div className="shipping-label">Shipping Price :</div>
                        <div className="shipping-price fw-normal">50&#8377;</div>                        
                    </div>

                    <div className="total-amount d-flex justify-content-between align-items-center">
                        <div className="total-label">Total Amount :</div>
                        <div className="total-price fw-semibold" id="total-price">0 &#8377;</div>                        
                    </div>

                <button className="menu-order-btn d-inline-block text-center text-capitalize my-auto w-75 mx-auto">Check out</button>
                </footer>
                
            </div>


            <div className="nav-toggler text-white me-2 d-inline-flex d-md-none" id="nav-toggler" title="Toggle Menu" onClick={menuToggler}>
                <i className="fa-solid fa-bars"></i>
            </div>

            <div className={`nav-menu bg-black text-center d-flex menu-${menuToggle}`} id="nav-menu" tabIndex='0' onBlur= {() => setMenuToggle('hide')}>
                <ul className="nav-list text-capitalize d-flex me-md-2" id="nav-list">
                    <li className="nav-item position-relative"><Link to="/" className="nav-link" onClick={navHide}>{props.link1}</Link></li>
                    <li className="nav-item position-relative"><Link to="/Menu" className="nav-link" onClick={navHide}>{props.link2}</Link></li>
                    <li className="nav-item position-relative"><Link to="/About" className="nav-link" onClick={navHide}>{props.link3}</Link></li>
                    <li className="nav-item position-relative"><Link to="/Contact" className="nav-link" onClick={navHide}>{props.link4}</Link></li>
                </ul>

                <div className="nav-close d-inline-flex d-md-none position-absolute text-white" id="nav-close" onClick={menuToggler}>
                    <i className="fa-solid fa-xmark"></i>
                </div>

            </div>
        </nav>
    </header>
    <Outlet></Outlet>
    </>
    )
}
