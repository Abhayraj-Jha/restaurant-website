import React from "react";

import './services.css';

const Services = () => {
    return (
        <>
            <div className="services">
                <span className="servicesText">SERVICES</span>
            </div>

            <div className="serviceBox">
                <div className="service">
                    <div className="serviceImg"><i class="fas fa-3x fa-truck"></i></div>
                    <div className="serviceHeading">QUICK DELIVERY</div>
                </div>
                <div className="service">
                    <div className="serviceImg"><i class="fas fa-3x fa-utensils"></i></div>
                    <div className="serviceHeading">GREAT TASTE</div>
                </div>
                <div className="service">
                    <div className="serviceImg"><i class="fas fa-3x fa-headset"></i></div>
                    <div className="serviceHeading">24/7 SUPPORT</div>
                </div>
            </div>
        </>
    )
};

export default Services;