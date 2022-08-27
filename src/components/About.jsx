import React from "react";
import { useEffect } from "react";

import './about.css';

// components

import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <Navbar />
            <div className="aboutImg">
                <div className="aboutContent">
                    <div className="aboutHeading">About us</div>
                    <div className="aboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam saepe
                        tempora nisi reiciendis ipsum aperiam qui provident magni nulla a at, atque inventore illo nesciunt, itaque
                        omnis sapiente harum? Repellendus quae dolor sapiente aperiam. <br />
                        Ullam itaque sapiente labore maxime explicabo dicta beatae voluptatem optio nemo modi, voluptate quos quasi ipsam aspernatur maiores. <br /><br />
                        facilis neque earum, molestiae unde pariatur. Consectetur dicta placeat laudantium veritatis, dolor voluptates provident magni recusandae nemo corporis ratione ad, <br /><br />
                       <span className="about-m"> facilis enim velit error rem adipisci magnam totam, earum nobis minus? Harum, perferendis velit optio, quisquam doloribus quod doloremque exercitationem
                        inventore maxime quos nobis libero nulla molestiae.</span>
                    </div>
                </div>
            </div>
            <hr />
            <hr />
            <br />
            <Footer />
        </>
    )
};

export default About;