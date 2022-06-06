import React from "react";
import { addItem } from "../../redux/actions/action";
import {useDispatch} from 'react-redux';

import './foodcard.css';

const FoodCard = ({foodData})=> {

    const dispatch = useDispatch();

    const changeText = (e)=> {
        e.target.textContent = "ADDED TO CART";
        dispatch(addItem(foodData));
    }

    return(
        <>
         <div className="foodCard">
             <div className="foodCardImg">
                 <img src={foodData.img} alt={foodData.name} />
             </div>
             <div className="foodDetails">
                 <div className="name">{foodData.name}</div>
                 <div className="price">₹{foodData.price} </div>
                 <button className="addToCart-btn" onClick={(e)=> changeText(e)}>ADD TO CART</button>
             </div>
         </div>
        </>
    )
};

export default FoodCard;