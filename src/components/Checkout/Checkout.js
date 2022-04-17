import React, { useState } from 'react';
import {FaShippingFast} from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const Checkout = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');

    const handleCreateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const shipping = {name, email, address, phone};
        console.log(shipping);
        toast("Order Submitted! Thanks For your Order");
    }
    return (
        <div className='form-container mt-5 mb-5'>
            <div className='w-50 mx-auto'>
                <h2 className='form-title text-center'>Checkout</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="form-group fs-5">
                        <label>Your Name</label>
                        <br/>
                        <input  type="text" name="name" className="form-control p-3 fs-5" placeholder="Your Name" required/>
                    </div>
                    <br/>
                    <div className="form-group fs-5">
                        <label>Your Email</label>
                        <br/>
                        <input readOnly type="email" value={user?.email} name="email" className="form-control p-3 fs-5" placeholder="" required/>
                    </div>
                    <br/>
                    <div className="form-group fs-5">
                        <label>Address</label>
                        <br/>
                        <input type="text" name="address" className="form-control p-3 fs-5" placeholder="Address"  required/>
                    </div>
                    <br/>
                    <div className="form-group fs-5">
                        <label>Phone Number</label>
                        <br/>
                        <input type="text" name="phone" className="form-control p-3 fs-5" placeholder="Phone number" required/>
                    </div>
                    <br/>
                    <button className='form-submit btn btn-primary w-100 p-2 fs-5 mx-auto d-block' type="submit">Checkout&nbsp;<FaShippingFast/></button>
                </form>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default Checkout;