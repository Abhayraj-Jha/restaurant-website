import React from "react";
import { useDispatch } from 'react-redux';
import { removeItem, changeQty } from "../../redux/actions/action";

import './cartitem.css';

const CartItem = ({ cartItemData }) => {
    const dispatch = useDispatch();

    const sendQty = (v, id, p) => {
        let data = {
            id: id,
            value: v,
            price: parseInt(p)
        };
        dispatch(changeQty(data));
    }

    return (
        <>
            <div className="cartItem">
                <div className="left">
                    <div className="cartItemImg">
                        <img src={cartItemData.img} alt="" />
                    </div>
                    <div className="cartItemName">
                        {cartItemData.name}
                    </div>
                </div>
                <div className="right">
                    <div className="cartItemQty">
                        <select id="qtySelector" onChange={(e) => sendQty(Number(e.target.value), cartItemData.id, cartItemData.price)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="cartItemPrice">
                        ₹{cartItemData.price}
                    </div>
                </div>
                <i class="fas fa-trash-alt" onClick={() => { dispatch(removeItem(cartItemData.id)) }}></i>
                <button className="remove"  onClick={() => { dispatch(removeItem(cartItemData.id)) }}>Remove</button>
            </div>
        </>
    )
};

export default CartItem;