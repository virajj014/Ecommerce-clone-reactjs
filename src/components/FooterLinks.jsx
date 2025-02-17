import React from "react";
import "./FooterLinks.css";

const FooterLinks = () => {
    return (
        <div className="footer-links">
            <div className="footer-links-row">
                <div className="footer-links-section">
                    <h4>AbeBooks</h4>
                    <p>Books, art & collectibles</p>
                </div>
                <div className="footer-links-section">
                    <h4>Amazon Web Services</h4>
                    <p>Scalable Cloud Computing Services</p>
                </div>
                <div className="footer-links-section">
                    <h4>Audible</h4>
                    <p>Download Audio Books</p>
                </div>
                <div className="footer-links-section">
                    <h4>IMDb</h4>
                    <p>Movies, TV & Celebrities</p>
                </div>
                <div className="footer-links-section">
                    <h4>Shopbop</h4>
                    <p>Designer Fashion Brands</p>
                </div>
                <div className="footer-links-section">
                    <h4>Amazon Business</h4>
                    <p>Everything For Your Business</p>
                </div>
                <div className="footer-links-section">
                    <h4>Prime Now</h4>
                    <p>2-Hour Delivery on Everyday Items</p>
                </div>
                <div className="footer-links-section">
                    <h4>Amazon Prime Music</h4>
                    <p>100 million songs, ad-free <br /> Over 15 million podcast episodes</p>
                </div>
            </div>
            <div className="footer-copyright">
                <p>
                    <a href="#">Conditions of Use & Sale</a> | <a href="#">Privacy Notice</a> | <a href="#">Interest-Based Ads</a>
                </p>
                <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
    );
};

export default FooterLinks;
