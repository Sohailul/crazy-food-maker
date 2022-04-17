import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='register w-50 mx-auto mt-5 '>
            <h2 className='text-center'>Please Login</h2>
            <form >
                <div class="form-group fs-5">
                    <input type="email" name='email' class="form-control p-3 fs-5" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br />
                <div class="form-group fs-5">
                    <input type="password" name='password' class="form-control p-3 fs-5" placeholder="Password" />
                </div>
                <br />
                
                <div className='form-group d-flex justify-content-center'>
                    <button type="submit" class="btn w-100 p-3 fs-5" style={{ backgroundColor: "#c5cdf1" }}>Login</button>
                </div>
                <p className='fw-bold text-center mt-2'>Don't have an account? <span><Link to='/register' className='text-decoration-none'>Please Register</Link></span></p>
            </form>
            
        </div>
    );
};

export default Login;