import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CocktailMenuList, createCocktail, deleteMenuItem } from '../../actions/menuItemsActions';
import MessageBox from '../../components/MessageBox';
import Preloader from '../../components/Preloader';
import '../../assets/css/base.css'
import { COCKTAIL_CREATE_RESET, MENUITEM_DELETE_RESET } from '../../constants/menItemsConstant';

export default function CocktailListScreen() {
    const navigate = useNavigate()
    const cocktailMenuList = useSelector((state) => state.cocktailMenuList);
    var {loading, error, cocktailmenu} = cocktailMenuList;

    const cocktailCreate = useSelector((state) => state.cocktailCreate);
    const {
        loading: loadingCreate, 
        success: successCreate, 
        error: errorCreate, 
        menuItem: createdMenuItem
    } = cocktailCreate;

    const menuItemDelete = useSelector((state) => state.menuItemDelete);
    const {
        loading: loadingDelete, 
        success: successDelete, 
        error: errorDelete
    } = menuItemDelete;

    const dispatch = useDispatch();
    useEffect(() => {
        if(successCreate) {
            dispatch({type: COCKTAIL_CREATE_RESET});
            navigate(`/cocktail/${createdMenuItem._id}/edit`);
        }
        if (successDelete) {
            dispatch({type: MENUITEM_DELETE_RESET})
        }
        dispatch(CocktailMenuList())
    }, [dispatch, successCreate, navigate, createdMenuItem, successDelete])

    const deleteHandler = (menuitem) => {
        if(window.confirm(`Are you sure to delete "${menuitem.name}" ?`)) {
            dispatch(deleteMenuItem(menuitem.category,menuitem._id))
        }
    }

    const createHandler = () => {
        dispatch(createCocktail());
    }
return (
    <>
    <div className="container-fluid listitems-container overflow-scroll">
        <div className="d-flex align-items-center">
            <div className='fs-4 fw-semibold text-capitalized py-3 px-1 me-auto'>Cocktail's Menu</div>
            <button type='button' className='btn btn-primary ms-auto text-capitalize' onClick={createHandler}>
                Create
            </button>
        </div>
        {loadingDelete && <Preloader class='menu-preloader'></Preloader>}
        {errorDelete && <MessageBox>{errorDelete}</MessageBox>}
        {loadingCreate && <Preloader class='menu-preloader'></Preloader>}
        {errorCreate && <MessageBox>{errorCreate}</MessageBox>}
        {loading 
        ? <Preloader class="menu-preloader"></Preloader>
        : error
        ? <MessageBox variant='danger'>{error}</MessageBox>
        : (
        <table className="table table-hover mt-3 table-bordered text-center">
            <thead className="bg-dark text-white">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">DISCRIPTION</th>
                    <th scope="col">ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {cocktailmenu.map((menuitem) =>
                    <tr key={menuitem._id}>
                        <th scope="row">{menuitem._id}</th>
                        <td>{menuitem.name}</td>
                        <td>{menuitem.price}</td>
                        <td className='menulist-table-text'>{menuitem.text}</td>
                        <td>
                            <button 
                                className='btn btn-warning mx-1 text-white fw-semibold edit-btn' 
                                type='button'
                                onClick={() => {navigate(`/${menuitem.category}/${menuitem._id}/edit`)}}
                                title='edit'
                            ><i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button 
                                className='btn btn-danger mx-1 delete-btn' 
                                type='button' 
                                title='delete'
                                onClick={() => deleteHandler(menuitem)}
                            ><i class="fa-solid fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                        )}
                </tbody>
        </table>
        )}
    </div>
    </>
)
}
