import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

      const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

      const handleLogin = (event)=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
      }
      const resetPassword = async (event) =>{
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
      }

    return (
        <div className='register w-50 mx-auto mt-5 '>
            <h2 className='text-center mb-5'>Please Login</h2>
            <SocialLogin></SocialLogin>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
            </div>
            <form onSubmit={handleLogin}>
                <div className="form-group fs-5">
                    <input ref={emailRef} type="email" name='email' className="form-control p-3 fs-5" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br />
                <div className="form-group fs-5">
                    <input ref={passwordRef} type="password" name='password' className="form-control p-3 fs-5" placeholder="Password" />
                </div>
                <br />
                {
                    error?
                    <p className='text-danger'>{error.message}</p>
                    :
                    <p className='text-success'></p>
                }
                <div className='form-group d-flex justify-content-center'>
                    <button type="submit" className="btn w-100 p-3 fs-5" style={{ backgroundColor: "#f0a453" }}>Login</button>
                </div>
                <div className='d-flex justify-content-around align-items-center mt-2'>
                <p className='fw-bold text-center mt-2'>Don’t have an account? <span><Link to='/register' className='text-decoration-none'>Register now</Link></span></p>
                <p className='fw-bold text-center mt-2'>Forgot Password? <span><Link to='/login' onClick={resetPassword} className='text-decoration-none'>Reset Password</Link></span></p>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Login;