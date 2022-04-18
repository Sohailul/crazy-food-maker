import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile] = useUpdateProfile(auth);

      if (user) {
        console.log("user", user);
    }

      const handleRegister = async (event) =>{
          event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        alert("verification email sent");
        navigate('/');

      }
    return (
        <div className='register w-50 mx-auto mt-5 mb-5'>
            <h2 className='text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group fs-5">
                    <label>Name</label>
                    <input type="text" name='name' className="form-control p-3 fs-5" placeholder="Your name" />
                </div>
                <br />
                <div className="form-group fs-5">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name='email' className="form-control p-3 fs-5" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br />
                <div className="form-group fs-5">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name='password' className="form-control p-3 fs-5" placeholder="Password" />
                </div>
                <br />
                <div className="form-check">
                    <input onClick={() => setAgree(!agree)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className={agree ? 'text-success' : 'text-danger'} for="exampleCheck1">Accept Terms and Conditions</label>
                </div>
                <br />
                <div className='form-group d-flex justify-content-center'>
                    <button disabled={!agree} type="submit" className="btn w-100 p-3 fs-5" style={{ backgroundColor: "#f0a453" }}>Register</button>
                </div>
                <p className='fw-bold text-center mt-2'>Already have an account? <span><Link to='/login' className='text-decoration-none'>Login</Link></span></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;