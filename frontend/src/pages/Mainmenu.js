import React, { useEffect, useState } from 'react'
import Innerpagenav from '../components/Innerpagenav';
import Menuitems from '../components/Menuitems';
import ScrollToTop from "react-scroll-to-top";
import Thumbnail from '../components/Thumbnail';
import axios from 'axios';

export default function Mainmenu(props) {
  const [mainmenuleft, setmainmenuleft] = useState([]);
    
    useEffect(() => {
        const fecthData = async () => {
            const { data } = await axios.get('/api/mainmenuleft');
            setmainmenuleft(data);
        };
        fecthData()
    }, []);

    const [mainmenuright, setmainmenuright] = useState([]);
    
    useEffect(() => {
        const fecthData = async () => {
            const { data } = await axios.get('/api/mainmenuright');
            setmainmenuright(data);
        };
        fecthData()
    }, []);
    const {onAdd} = props;
return (
<>
<ScrollToTop smooth className='scroll-up' top='800' component={<i className="fa-solid fa-arrow-up"></i>}/>
<Thumbnail id="menu-main-menu" title='Main-Menu'/>
<div className="container-fluid pt-3">
    <Innerpagenav active='Main-Menu' navto='/Main-Menu'/>
    <div className="row overflow-x-hidden pt-1">
      <div className="col-lg-6 col-12 menu-item-left">
        <Menuitems menuitem={mainmenuleft} onAdd={onAdd}/>
      </div>
      <div className="col-lg-6 col-12 menu-item-right">
        <Menuitems menuitem={mainmenuright} onAdd={onAdd}/>
      </div>
    </div>
</div>
</>
)
}
