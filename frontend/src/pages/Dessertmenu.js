import React, { useEffect, useState } from 'react'
import Innerpagenav from '../components/Innerpagenav';
import Menuitems from '../components/Menuitems';
import ScrollToTop from "react-scroll-to-top";
import Thumbnail from '../components/Thumbnail';
import axios from 'axios';

export default function Dessertmenu(props) {
    const [dessertmenuleft, setdessertmenuleft] = useState([]);
    useEffect(() => {
        const fecthData = async () => {
            const { data } = await axios.get('/api/dessertmenuleft');
            setdessertmenuleft(data);
        };
        fecthData()
    }, []);

    const [dessertmenuright, setdessertmenuright] = useState([]);
    useEffect(() => {
        const fecthData = async () => {
            const { data } = await axios.get('/api/dessertmenuright');
            setdessertmenuright(data);
        };
        fecthData()
    }, []);

    const {onAdd} = props;
return (
    <>
    <ScrollToTop smooth className='scroll-up' top='800' component={<i className="fa-solid fa-arrow-up"></i>}/>
    <Thumbnail id="menu-dessert" title="Dessert's"/>
    <div className="container-fluid pt-3">
        <Innerpagenav active="Dessert's" navto='/Dessertmenu'/>
        <div className="row overflow-x-hidden pt-1">
            <div className="col-lg-6 col-12 menu-item-left">
                <Menuitems menuitem={dessertmenuleft} onAdd={onAdd}/>
            </div>
            <div className="col-lg-6 col-12 menu-item-right">
                <Menuitems menuitem={dessertmenuright} onAdd={onAdd}/>
            </div>
        </div>
    </div>
    </>
)
}
