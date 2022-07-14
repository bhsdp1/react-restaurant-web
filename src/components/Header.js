import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Nopage from '../pages/Nopage';

export default function Header() {
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar title="Uncle Sammy's Kitchen" link1="Home" link2="Menu" link3="About" link4="Contact"/>}>
                    <Route index element={<Home />}></Route>
                    <Route path='Menu' element={<Menu />}></Route>
                    <Route path='About' element={<About />}></Route>
                    <Route path='Contact' element={<Contact />}></Route>
                    <Route path='*' element={<Nopage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
    )
}