import React from 'react';
import './Contact.css';
import TitileTypeTwo from '../../UI/TitileTypeTwo/TitileTypeTwo';

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-info">
            <TitileTypeTwo Title={'Contact Us'} />
                {/* <h1>Contact Us</h1> */}
                <p>If you have any questions or need assistance, feel free to reach out to us.</p>
                <div className="info">
                    <div className="info-item">
                        <h3>Address</h3>
                        <p>123 Book Street, Reading City, RC 45678</p>
                    </div>
                    <div className="info-item">
                        <h3>Phone</h3>
                        <p>+1 234 567 8900</p>
                    </div>
                    <div className="info-item">
                        <h3>Email</h3>
                        <p>support@bookstore.com</p>
                    </div>
                </div>
            </div>
            <div className="contact-form">
            <TitileTypeTwo Title={'Get in Touch'} />
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" rows="6" placeholder="Enter your message"></textarea>
                    </div>
                    <button className="btn btn-border">Send Message</button>
                </form>
            </div>
        </div>
    );
}
