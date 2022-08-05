import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Appetizermenu from './pages/Appetizermenu';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Nopage from './pages/Nopage';
import Mainmenu from './pages/Mainmenu';
import Pizzamenu from './pages/Pizzamenu';
import Dessertmenu from './pages/Dessertmenu';
import Burgermenu from './pages/Burgermenu';
import Seafoodmenu from './pages/Seafoodmenu';
import Cocktailmenu from './pages/Cocktailmenu';
import Snacksmenu from './pages/Snacksmenu';
import Footer from './components/Footer';
import Productdetails from './screens/Productdetails';
import Cartscreen from './screens/Cartscreen';

export default function App() {
    return (
        <BrowserRouter>
            <Navbar title="Uncle Sammy's Kitchen" link1="Home" link2="Menu" link3="About" link4="Contact"/>
                <Routes>
                        {/* navbar links */}
                        <Route index element={<Home/>}></Route>
                        <Route path='/Menu' element={<Menu/>}></Route>
                        <Route path='/About' element={<About/>}></Route>
                        <Route path='/Contact' element={<Contact/>}></Route>

                        {/* menu item pages */}
                        <Route path='/snacks' element={<Snacksmenu/>}></Route>
                        <Route path='/appetizer' element={<Appetizermenu/>}></Route>
                        <Route path='/mainmenu' element={<Mainmenu/>}></Route>
                        <Route path='/seafood' element={<Seafoodmenu/>}></Route>
                        <Route path='/pizza' element={<Pizzamenu/>}></Route>
                        <Route path='/cocktail' element={<Cocktailmenu/>}></Route>
                        <Route path='/dessert' element={<Dessertmenu/>}></Route>
                        <Route path='/burger' element={<Burgermenu/>}></Route>

                        {/* product details page */}
                        <Route path='/productdetails/:category/:id' element={<Productdetails/>}></Route>

                        {/* shopping cart */}
                        <Route path="/cart/" element={<Cartscreen/>}></Route>
                        <Route path="/cart/:category/:id" element={<Cartscreen/>}></Route>

                        {/* error page */}
                        <Route path='*' element={<Nopage/>}></Route>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
