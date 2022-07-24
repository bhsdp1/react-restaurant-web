import React, { useEffect, useState } from 'react';
import Innerpagenav from '../components/Innerpagenav';
import Menuitems from '../components/Menuitems';
import ScrollToTop from "react-scroll-to-top";
import Thumbnail from '../components/Thumbnail';
import axios from 'axios';

export default function Pizzamenu(props) {
    const [pizzamenuleft, setpizzamenuleft] = useState([]);
    useEffect(() => {
        const fecthData = async () => {
            const { data } = await axios.get('/api/pizzamenuleft');
            setpizzamenuleft(data);
        };
        fecthData()
    }, []);

    const [pizzamenuright, setpizzamenuright] = useState([]);
    useEffect(() => {
        const fecthData = async () => {
            const { data } = await axios.get('/api/pizzamenuright');
            setpizzamenuright(data);
        };
        fecthData()
    }, []);
    const {onAdd} = props;
return (
    <>
    <ScrollToTop smooth className='scroll-up' top='800' component={<i className="fa-solid fa-arrow-up"></i>}/>
    <Thumbnail id="menu-pizza" title="Pizza's"/>
    <div className="container-fluid pt-3">
        <Innerpagenav active="Pizza's" navto='/Pizzamenu'/>
        <div className="row overflow-x-hidden pt-1">
            <div className="col-lg-6 col-12 menu-item-left">
                <Menuitems menuitem={pizzamenuleft} onAdd={onAdd}/>
            </div>
            <div className="col-lg-6 col-12 menu-item-right">
                <Menuitems menuitem={pizzamenuright} onAdd={onAdd}/>
            </div>
        </div>
    </div>
    </>
)
}
