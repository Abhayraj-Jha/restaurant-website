import React from 'react';
import {Link} from 'react-router-dom';
import { foodData } from '../../data/foodBannerData';

import './foodbanner.css';

const FoodBanner = () => {
    return (
        <>
            <div className="foodBanner">
                <div className="bestSeller">
                    <span className="bestsellerText">BESTSELLER</span>
                </div>

                {
                    foodData.map((elem,i) => {
                        return (
                            <div className="bannerBox" key={i}>
                                <div className="bannerImg">
                                    <img src={elem.img} alt="" />
                                </div>
                                <div className="bannerDescription">
                                    <div className="bannerText">{elem.text}</div>
                                    <div className="bannerButton">
                                        <Link to="/Menu" className='link-btn'><button>ORDER</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};

export default FoodBanner;