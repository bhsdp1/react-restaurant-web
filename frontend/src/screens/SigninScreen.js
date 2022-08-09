import React, { useState } from 'react';
import '../assets/css/signin.css';
import '../assets/css/base.css';
import {Link} from 'react-router-dom';


export default function SigninScreen() {
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        //TODO: signin action
    };
return (
    <main className="container-fluid">
        <div className="main-content mx-auto my-3 signin-container px-2 pt-2">
            <form className='form' onSubmit={submitHandler}>
                <div className="signin-header text-capitalize p-2">Sign in</div>

                <section className="signin-email-container my-sm-2 my-1 p-2">
                    <label htmlFor="email" className="form-label signin-email-title mb-2 text-capitalize">Email address</label>
                    <input type="email" id="email" className="form-control signin-email-input" placeholder="name@example.com" required
                    onChange={(e) => setEmail(e.target.value)}/>
                </section>

                <section className="sigin-password-container my-sm-2 my-1 p-2">
                    <label htmlFor="password" className="form-label signin-password-title mb-2 text-capitalize">password</label>
                    <input type="password" className="form-control signin-password-input" id="password" placeholder="Enter your password" required
                    onChange={(e) => setPassword(e.target.value)}/>
                </section>

                <footer className="d-flex justify-content-center align-items-center mt-sm-4 mt-3 flex-column">
                    <button type="submit" className="btn btn-primary signin-submit">sign in</button>
                    <div className="new-costumer mt-2 text-capitalize">
                        new costumer? 
                        <Link to="/register">
                            <span className="new-account">create new account.</span>
                        </Link>
                    </div>
                </footer>
            </form>
        </div>
    </main>
)
}
