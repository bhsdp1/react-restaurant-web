import React, { useState } from 'react';
import "../assets/css/navbar.css";
import '../assets/css/base.css';
import { Outlet , NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = (props) => {
    const cart = useSelector((state) => state.Cart);
    const {cartItems} = cart;
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
                <NavLink to="/">
                    <img  src="/images/common/res-logo.jpg" alt="restaurent logo" className="img-fluid rounded-circle"/>
                </NavLink>
            </div>

            <div className="brand-name text-capitalize me-auto ms-2 text-white" title="brand name">
                <NavLink to="/">
                    {props.title}
                </NavLink>
            </div>

            <div className="cart-icon text-white me-3" title="Order Cart" id="cart-icon">
                <NavLink to='/cart'>
                    <i className="fa-solid fa-cart-shopping position-relative">
                        {cartItems.length > 0 && (
                        <span className="cart-bubble position-absolute text-center">{cartItems.length}</span>)}
                    </i>
                </NavLink>
            </div>

            <div className="nav-toggler text-white me-2 d-inline-flex d-md-none" id="nav-toggler" title="Toggle Menu" onClick={menuToggler}>
                <i className="fa-solid fa-bars"></i>
            </div>

            <div className={`nav-menu bg-black text-center d-flex menu-${menuToggle}`} id="nav-menu" tabIndex='0' onBlur= {() => setMenuToggle('hide')}>
                <ul className="nav-list text-capitalize d-flex me-md-2" id="nav-list">
                    <li className="nav-item position-relative"><NavLink to="/" className="nav-link" onClick={navHide}>{props.link1}</NavLink></li>
                    <li className="nav-item position-relative"><NavLink to="/Menu" className="nav-link" onClick={navHide}>{props.link2}</NavLink></li>
                    <li className="nav-item position-relative"><NavLink to="/Contact" className="nav-link" onClick={navHide}>{props.link3}</NavLink></li>
                    <li className="nav-item position-relative"><NavLink to="/signin" className="nav-link" onClick={navHide}>{props.link4}</NavLink></li>
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

export default Navbar;
