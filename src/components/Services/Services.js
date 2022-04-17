import React from 'react';
import './Services.css';
import {BsFillBagCheckFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    const { title, price, description, img } = service;
    return (
        <div className='service col-sm-12 col-md-4 d-flex justify-content-center'>
            <div className="card" style={{width: "25rem"}}>
                <img src={img} className="mx-auto d-block img-fluid w-75" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-title fw-bold">Price: ${price}</h6>
                        <p className="card-text">{description}</p>
                        <Link to="/checkout" className="btn d-block mx-auto"><BsFillBagCheckFill/>&nbsp;Checkout</Link>
                    </div>
            </div>
        </div>
    );
};

export default Services;