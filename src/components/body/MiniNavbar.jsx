import React, { useState } from 'react';
import { foodItems } from './../../data/foodCardData.js';

// components

import FoodCard from './../menu-components/FoodCard';

import './mininavbar.css';

const MiniNavbar = () => {
    const [liveData, setLiveData] = useState(foodItems);

    const [active, setActive] = useState({
        activeObj: 'All',
        objects: ['All', 'Indian', 'Chinese', 'Snacks', 'Sweets']
    });

    const toogleActive = (i, e) => {
        setActive(
            { ...active, activeObj: active.objects[i] }
        );

        let curData;

        if (e === 'All') {
            curData = foodItems.filter((elem) => {
                return elem
            })
            setLiveData(curData);
        }
        else {
            curData = foodItems.filter((elem) => {
                return elem.type === e
            })
            setLiveData(curData);
        }
    };

    return (
        <>
            <div className="miniNav">
                <div className="miniNavBox">
                    {
                        active.objects.map((elem, i) => {
                            return (
                                <div className={active.objects[i] === active.activeObj ? "mininavElements active" : "mininavElements inactive"} key={i} onClick={(e) => { toogleActive(i, e.target.textContent) }}>{elem}</div>
                            )
                        })
                    }
                </div>
                <div className="miniNav-mobile">
                    <select className="foodTypeSelector" onChange={(e) => { toogleActive(0, e.target.value) }}>
                        <option value="All">All</option>
                        <option value="Indian">Indian</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Sweets">Sweets</option>
                    </select>
                </div>
            </div>

            <div className="foodCardBox">
                {
                    liveData.map((elem, i) => {
                        return <FoodCard foodData={elem} key={i} />
                    })
                }
            </div>
        </>
    )
};

export default MiniNavbar;