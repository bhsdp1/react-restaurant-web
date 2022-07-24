import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import About from '../pages/About';
import Appetizermenu from '../pages/Appetizermenu';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Nopage from '../pages/Nopage';
import Mainmenu from '../pages/Mainmenu';
import Pizzamenu from '../pages/Pizzamenu';
import Dessertmenu from '../pages/Dessertmenu';
import Burgermenu from '../pages/Burgermenu';

const Header = () => {
    const [cartItems, setCartitems] = useState([]);
    const onAdd = (menuitem) => {
        const exist = cartItems.find((x) => x.id === menuitem.id);
        if(exist) {
            setCartitems(
                cartItems.map((x) => 
                x.id === menuitem.id ? {...exist, qty: exist.qty + 1}: x
                )
            );
        }else {
            setCartitems([...cartItems, {...menuitem, qty :1}])
        }
    }

    const onRemove = (menuitem) => {
        const exist = cartItems.find((x) => x.id === menuitem.id);
        if(exist.qty === 1) {
            setCartitems(cartItems.filter((x) => x.id !== menuitem.id));
        }else {
            setCartitems(
                cartItems.map((x) => 
                x.id === menuitem.id ? {...exist, qty: exist.qty - 1}: x
                )
            );
        }
    }
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar title="Uncle Sammy's Kitchen" link1="Home" link2="Menu" link3="About" link4="Contact" cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='Menu' element={<Menu/>}></Route>
                    <Route path='About' element={<About/>}></Route>
                    <Route path='Contact' element={<Contact/>}></Route>
                    <Route path='Appetizermenu' element={<Appetizermenu onAdd={onAdd}/>}></Route>
                    <Route path='Main-Menu' element={<Mainmenu onAdd={onAdd}/>}></Route>
                    <Route path='Pizzamenu' element={<Pizzamenu onAdd={onAdd}/>}></Route>
                    <Route path='Dessertmenu' element={<Dessertmenu onAdd={onAdd}/>}></Route>
                    <Route path='Burgermenu' element={<Burgermenu onAdd={onAdd}/>}></Route>
                    <Route path='*' element={<Nopage/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default Header;