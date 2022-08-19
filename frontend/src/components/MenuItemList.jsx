import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function MenuItemList(props) {
    const {menuitem} = props;
    const navigate = useNavigate
return (
    <>
    <tr key={menuitem._id}>
        <th scope="row">{menuitem._id}</th>
            <td>{menuitem.name}</td>
            <td>{menuitem.price}</td>
            <td className='menulist-table-text'>{menuitem.text}</td>
            <td>
                <button 
                    className='btn btn-warning mx-1 text-white fw-semibold' 
                    type='button'
                    onClick={() => {navigate(`/${menuitem.category}/${menuitem._id}/edit`)}}
                    itle='edit'
                ><i class="fa-solid fa-pen-to-square"></i>
                </button>
                    <button 
                        className='btn btn-danger mx-1' 
                        type='button' 
                        title='delete'
                        onClick={() => props.onClick}
                ><i class="fa-solid fa-trash-can"></i>
                </button>
                        </td>
        </tr>
    </>
)
}
