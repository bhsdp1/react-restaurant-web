import React from'react'

export default function Addtocartbtn(props) {
return (
    <button className={`add-to-cart d-inline-block text-center text-capitalize ${props.class}`} >{props.content}</button>
)
}