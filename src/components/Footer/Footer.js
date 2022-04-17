import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='text-center bg-dark text-white py-3'>
            <h5 className='mt-2'>Copyright © {year}</h5>
        </div>
    );
};

export default Footer;