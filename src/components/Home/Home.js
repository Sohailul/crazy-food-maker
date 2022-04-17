import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='home-container'>
            <div className='banner'>
                <Slider />
            </div>
            <div className='container services mt-3 mb-5'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div style={{ height: '1px' }} className='bg-dark w-25'></div>
                    <h2 className='my-5 px-2'>Services</h2>
                    <div style={{ height: '1px' }} className='bg-dark w-25'></div>
                </div>
                <div className='row g-5 d-flex justify-content-center text-center'>
                    {
                        services.map(service => <Services
                            key={service.id} service={service}>
                        </Services>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;