import React from 'react'
import Innerpagenav from '../components/Innerpagenav';
import Menuitems from '../components/Menuitems';
import { data } from '../data/Menuitemsdata';
import ScrollToTop from "react-scroll-to-top";
import Thumbnail from '../components/Thumbnail';

export default function Dessertmenu(props) {
    const {dessertMenu} = data,
        {menuitemsLeft} = dessertMenu,
        {menuitemsRight} = dessertMenu;
        const {onAdd} = props;
return (
    <>
    <ScrollToTop smooth className='scroll-up' top='800' component={<i className="fa-solid fa-arrow-up"></i>}/>
    <Thumbnail id="menu-dessert" title="Dessert's"/>
    <div className="container-fluid pt-3">
        <Innerpagenav active="Dessert's" navto='/Dessertmenu'/>
        <div className="row overflow-x-hidden pt-1">
            <div className="col-lg-6 col-12 menu-item-left">
                <Menuitems menuitem={menuitemsLeft} onAdd={onAdd}/>
            </div>
            <div className="col-lg-6 col-12 menu-item-right">
                <Menuitems menuitem={menuitemsRight} onAdd={onAdd}/>
            </div>
        </div>
    </div>
    </>
)
}
