import React from 'react'
import Thumnail from '../components/Thumnail'
import '../assets/css/thumbnail.css'
import '../assets/css/menucards.css'
import Menucards from '../components/Menucards'
import data from '../data/MenuCards';
import Bounce from 'react-reveal/Bounce';

export default function Menu() {
  const { MenuPageCards } = data;
  return (
    <>
    <Thumnail title='menu' id='menu-thumbnail'/>
    <div className="container-fluid pt-2 my-md-4 main-content mb-5">
        <div className="row">
            <Bounce left cascade>
            <div className="d-block menu-heading text-uppercase text-center fst-italic mt-2 mb-md-3">please select the menu</div>
            </Bounce>
            <Menucards cards={MenuPageCards}/>
        </div>
    </div>
    </>
  )
}
