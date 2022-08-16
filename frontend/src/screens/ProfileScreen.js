import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { detailsUser } from '../actions/userActions';
import '../assets/css/forms.css';
import '../assets/css/base.css';
import Preloader from '../components/Preloader';
import MessageBox from '../components/MessageBox';

export default function ProfileScreen() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const {loading, error, user} = userDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsUser(userInfo._id))
    }, [dispatch, userInfo])

    const submitHandler = (e) => {
        e.preventDefault();
    } 
return (
    <main className="container-fluid">
        <div className="main-content mx-auto my-3 register-container px-2 pt-2 pb-4">
            <form className='form' onSubmit={submitHandler}>
                <div className="fs-5 fw-semibold text-capitalize p-2">User Profile</div>
                {
                loading? <Preloader class='menu-preloader'/>
                : 
                error ? <MessageBox>{error}</MessageBox>
                :
                <>
                    <section className="my-sm-2 p-2">
                        <label for="name" className="form-label form-input-label mb-2 text-capitalize">name</label>
                        <input type="text" className="form-control" id="name" value={user.name} placeholder="Enter name" required/>
                    </section>
                    <section className="my-2 p-2">
                        <label for="email" className="form-label form-input-label mb-2 text-capitalize">Email</label>
                        <input type="email" className="form-control" id="email" value={user.email} placeholder="name@example.com" required/>
                    </section>
                    <section className="my-2 p-2">
                        <label for="password" className="form-label form-input-label mb-2 text-capitalize">password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" required/>
                    </section>
                    <section className="my-2 p-2">
                        <label for="confirm-password" className="form-label form-input-label mb-2 text-capitalize">confirm password</label>
                        <input type="password" className="form-control" id="confirm-password" placeholder="Enter confirm password" required/>
                    </section>
                    <footer className="d-flex justify-content-center align-items-center mt-4 flex-column">
                        <button type="submit" className="btn btn-primary register-submit text-capitalize">update</button>
                    </footer>
                </>
                }
                
            </form>
        </div>
    </main>
)
}
