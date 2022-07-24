import React from 'react'
function Menuitemdisplay(props) {
    const {menuitem, onAdd} = props;
return (
    <>
    <div className="row menu-item-container align-items-center mx-auto mb-4 p-3">
        <div className="px-0 mt-1 col-sm-3 col-12">
            <img className="menu-item-img mx-auto d-block" src={menuitem.image} alt={menuitem.name} loading='lazy'/>
        </div>
        <div className="text-center text-sm-start mt-2 col-12  col-sm-9 ps-md-4">
            <h3 className="menu-item-title mb-0 mt-1 text-capitalize">{menuitem.name}</h3>
            <div className="menu-item-price">{menuitem.price}&#8377;</div>
            <h5 className="menu-item-sub mt-1 mt-sm-0 w-100">
                {menuitem.text}
            </h5>
            <button className="add-to-cart d-inline-block text-center text-capitalize" onClick={() => onAdd(menuitem)}>add to cart | <i className="fa-solid fa-cart-plus"></i></button>
        </div>
    </div>
    </>
)
}
export default function Menuitems(props) {
    const {menuitem, onAdd} = props
return (
    <>
    {
    menuitem.map((menuitem) => {
        return  <Menuitemdisplay key={menuitem.id} menuitem={menuitem} onAdd={onAdd}/>
    })
    }
    </>
)
}