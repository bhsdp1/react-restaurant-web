import React from 'react';
import '../assets/css/base.css';
import '../assets/css/menuitems.css';
import Innerpagenav from '../components/Innerpagenav';
import { data } from '../data/Menuitemsdata';
import Menuitems from '../components/Menuitems';
import ScrollToTop from "react-scroll-to-top";
import Thumbnail from '../components/Thumbnail';


export default function Appetizermenu(props) {
  const {appetizer} = data,
        {menuitemsLeft} = appetizer,
        {menuitemsRight} = appetizer;
  const {onAdd} = props;
  return (
    <>
    <ScrollToTop smooth className='scroll-up' top='800' component={<i className="fa-solid fa-arrow-up"></i>}/>
    <Thumbnail id="menu-appetizer" title='Appetizer'/>
    <div className="container-fluid pt-3">
      <Innerpagenav active='Appetizer' navto='/Appetizermenu'/>
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
