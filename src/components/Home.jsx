import React from "react";
import { useEffect } from "react";

// components

import Navbar from "./header/Navbar";
import Body from "./body/Body";
import Footer from "./footer/Footer";

const Home = ()=> {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
         <Navbar />
         <Body />
         <Footer />
        </>
    )
};

export default Home;