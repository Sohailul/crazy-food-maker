import React from 'react';

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://live.staticflickr.com/65535/52009081437_115402f29c_b.jpg" className="d-block w-100 img-fluid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://live.staticflickr.com/65535/52010155823_b000fc7fa2_b.jpg" className="d-block w-100 img-fluid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://live.staticflickr.com/65535/52010618430_abd61b6ba7_b.jpg" className="d-block w-100 img-fluid" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;