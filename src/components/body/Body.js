import React from "react";
import { Link } from "react-router-dom";

// component 

import FoodBanner from "./FoodBanner";
import Services from "./Services";

import './body.css';

const Body = ()=> {

    return(
        <>
        <div className="body">
            {/* <img src="https://cdn.pixabay.com/photo/2020/03/21/02/26/pizza-4952509_1280.jpg" alt="A Pizza" className="bodyBackground" /> */}
            <img src={window.innerWidth > 700 ? "https://cdn.pixabay.com/photo/2020/03/21/02/26/pizza-4952509_1280.jpg" : "https://c0.wallpaperflare.com/preview/544/520/943/food-photography-brazil-snack-dark-mood.jpg"} alt="A Pizza" className="bodyBackground" />
            <div className="bodyContent">
                <span className="bodyText">
                    Explore your <br /> favourite dishes ...
                </span>
                <Link to="/Menu" className="exp-btn"><button className="bodyButton">EXPLORE</button> </Link>
            </div>
        </div>

        <FoodBanner />
        <Services />
        </>
    )
};

export default Body;