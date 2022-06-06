import React from "react";

import './footer.css';


const Footer = () => {

    const topView = ()=> {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <>
            <div className="footer">
                <div className="footerBox">
                    <div className="footerContent">
                        <ul>
                            <li className="footerHeading">SOCIAL</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Web</li>
                        </ul>
                        <ul className="m-view">
                            <li className="footerHeading">INFORMATION</li>
                            <li>About us</li>
                            <li>Our services</li>
                            <li>Our offerings</li>
                            <li>Details</li>
                        </ul>
                        <ul className="m-view">
                            <li className="footerHeading">LEGAL</li>
                            <li>Copyright</li>
                            <li>Know more</li>
                            <li>User</li>
                            <li>Product</li>
                        </ul>
                        <ul>
                            <li className="footerHeading">SERVICES</li>
                            <li>24/7 support</li>
                            <li>Quick delivery</li>
                            <li>Great taste</li>
                            <li>Variety</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footerFoot">
                <div className="border"></div>
                <div className="copyrightBox">
                    <div className="copyright">@ Copyright 22</div>
                    <div className="backtoTop" onClick={topView}>Back to top <i class="fas fa-arrow-up"></i></div>
                </div>
            </div>
        </>
    )
};

export default Footer;