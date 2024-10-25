import React from 'react';

import footerLogo from "../../assets/logo-footer.png"
import bgBtn from '../../assets/bg-btn.png'

const Footer = () => {
    return (
        <footer className='bg-[#06091A] text-white '>
            <div className="footer footer-center   rounded p-10">
                
                <nav>
                    <div className="grid grid-flow-col gap-4"> 
                         <a>  
                            <img src={footerLogo} alt="footer-logo" />                          
                        </a>
                    </div>
                </nav>
              
            </div>
            <div className="footer  p-10 container mx-auto">
                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <p className='md:w-1/2'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Subscribe</h6>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                    <div className="join pt-4">
                        <input className="input input-bordered join-item" placeholder="Enter Your Email" />
                        <button className="btn join-item rounded-r-full" style={{ backgroundImage: `url(${bgBtn})` }}>Subscribe</button>
                    </div>
                </nav>
            </div>
            <div className="footer footer-center p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;