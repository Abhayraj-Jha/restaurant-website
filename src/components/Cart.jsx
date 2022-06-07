import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from 'react-modal';
import './cart.css';

// component

import Navbar from "./header/Navbar";
import CartItem from "./cart-components/CartItem";
import Footer from "./footer/Footer";

const Cart = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [open, setOpen] = useState(false);

    const cartData = useSelector((state) => state.handleCart);


    let cartTotal = cartData.reduce((acc, elem)=> {
        acc += parseInt(elem.price);
        return acc
    }, 0);


    return (
        <>
            <div className="cart">
                <Navbar />
                <div className="yourCart">
                    <span className="yourCartText">YOUR CART</span>
                </div>

                <div className={cartData.length > 0 ? "nonemptyCart" : "emptyCart"}>
                    Your cart is empty
                </div>
                <div className="cartItemBox">
                    {
                        cartData.map((elem) => {
                            return <CartItem cartItemData={elem} key={elem.id} />
                        })
                    }
                </div>
            </div>

            <div className="billBox">
                <div className="bill">
                    <div className="subTotal">
                        <span className="text">Subtotal</span>
                        <span className="amount">₹{cartTotal}</span>
                    </div>
                    <div className="shipping">
                        <span className="text">Shipping fee</span>
                        <span className="amount">₹0</span>
                    </div>
                    <div className="discount">
                        <span className="text">Discount</span>
                        <span className="amount">₹0</span>
                    </div>
                </div>

                <div className="totalAmount">
                    <span className="text">TOTAL</span>
                    <span className="amount">₹{cartTotal}</span>
                </div>
                <div className="checkOut-btn">
                    <button className="c-b" onClick={() => setOpen(true)}>
                        ORDER
                    </button>
                </div>
            </div>

            <div className="modalBox">
                <Modal isOpen={open} className="modal">
                    <div className="head">
                        Order Placed ...
                    </div>
                    <button className="close-popup" onClick={() => setOpen(false)}>DONE</button>
                </Modal>
            </div>

            <Footer />
        </>
    )
};

export default Cart;