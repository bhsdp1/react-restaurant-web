import React from 'react'
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';

function Card(props) {
    const {menucards} = props;
    return (
        <>
        <Zoom top duration="1300" delay='1000'>
        <div className={menucards.utilities}>
                <article className={`menu-card ${menucards.class} mx-auto`}>
                    <div className="place-holder">Visaully Hidden</div>
                    <Link to={menucards.link} className="card-link">
                        <div className="card-img-hover"></div>
                        <span className="visually-hidden">PlaceHolder</span>
                    </Link>
                    <div className="card-info text-center">
                        <span className="card-title">{menucards.name}</span>
                    </div>
                </article>
            </div>
        </Zoom>
        </>
    )
}

export default function Menucards(props) {
    const {cards} = props;
    return (
        <>
        {cards.map((menucards) => {
            return <Card key={menucards.id} menucards={menucards}/>
        })}
        </>
)
}
