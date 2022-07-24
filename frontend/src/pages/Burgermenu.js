import React, { useEffect, useState } from 'react'
import Innerpagenav from '../components/Innerpagenav';
import Menuitems from '../components/Menuitems';
import ScrollToTop from "react-scroll-to-top";
import Thumbnail from '../components/Thumbnail';
import axios from 'axios';

export default function Burgermenu(props) {
    const [burgermenuleft, setburgermenuleft] = useState([]);
    
    useEffect(() => {
        const fecthData = async () => {
            const { data } = await axios.get('/api/burgermenuleft');
            setburgermenuleft(data);
        };
        fecthData()
    }, []);

    const [burgermenuright, setburgermenuright] = useState([]);
    useEffect(() => {
        const fecthData = async () => {
            const { data } = await axios.get('/api/burgermenuright');
            setburgermenuright(data);
        };
        fecthData()
    }, []);
    const {onAdd} = props;
return (
    <>
    <ScrollToTop smooth className='scroll-up' top='800' component={<i className="fa-solid fa-arrow-up"></i>}/>
    <Thumbnail id="menu-burger" title='Burger'/>
    <div className="container-fluid pt-3">
        <Innerpagenav active='Burger' navto='/Burgermenu'/>
        <div className="row overflow-x-hidden pt-1">
            <div className="col-lg-6 col-12 menu-item-left">
                <Menuitems menuitem={burgermenuleft} onAdd={onAdd}/>
            </div>
            <div className="col-lg-6 col-12 menu-item-right">
                <Menuitems menuitem={burgermenuright} onAdd={onAdd}/>
            </div>
        </div>
    </div>
    </>
)
}
