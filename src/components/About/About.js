import React from 'react';
import img from '../Images/sohailul-alam.png';

const About = () => {
    return (
        <div className='container mt-5 text-center mb-3'>
            <h1 className='text-center mb-5'>About Me</h1>
            <div className="card mx-auto" style={{ width: "35rem" }}>
                <img src={img} className="mx-auto d-block img-fluid w-75" alt="Sohailul Alam" />
                <div className="card-body">
                    <h5 className="card-title">Name: Sohailul Alam</h5>
                    <p className="card-text">Bismillahir Rahmanir Rahim! My Goal is to become a Professional Full Stack Web developer. And I'm very much enthusiast about Blockchain. And I'm spending time behind learning new things in web development sector and Blockchain sector.</p>
                </div>
            </div>
        </div>
    );
};

export default About;