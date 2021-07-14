import React from 'react'
import './Footer.css';
import { Call, Mail } from '@material-ui/icons';

export const Footer: React.FC = () => {
 const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Discover</h4>
                        <ul>
                            <li><a href="#"> Home</a></li>
                            <li><a href="#"> Sales</a></li>
                            <li><a href="#">Our Network </a></li>
                            <li><a href="#">Office Automation </a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Resource</h4>
                        <ul>
                            <li><a href="#"> Privacy Policy</a></li>
                            <li><a href="#"> Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get In Touch</h4>
                        <div className="call">
                            <h5> <Call />  Call </h5>
                            <li className="call1">011-40199362</li>
                        </div>
                        <div className="mail">
                            <h5><Mail /> Mail</h5>
                            <li className="mail1">info@bmcpsolutions.com</li>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="location">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6944229327155!2d77.3100534150827!3d28.63891918241525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbc881cb1739%3A0x462ea0e6fe9a621f!2sBMCP%20Solutions%20India%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1624793324651!5m2!1sen!2sin" ></iframe>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <p className='copyright'>
                        BMCP Solutions India Pvt. Ltd., Φ73 Patpargunj Industrial Area New Delhi 110092
                    </p>
                </div>
                <div className='row1'>
                    <p className='copyright1'>
                        Copyright 	&copy;  {year} BMCP Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

