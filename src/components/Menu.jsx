import React from "react";
import { useEffect } from "react";
// component

import Navbar from "./header/Navbar";
import MiniNavbar from "./body/MiniNavbar";
import Footer from "./footer/Footer";

const Menu = ()=> {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <>
         <Navbar />
         <MiniNavbar />
         <Footer />
        </>
    )
};

export default Menu;