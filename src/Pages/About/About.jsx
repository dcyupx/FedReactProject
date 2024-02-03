import React from 'react';
import './About.css';
import { storeData } from '../../Data/Data';

export default function About() {
    return (
        <section className="about-section">
            <div className="container about-container">
                <div className="about-wrapper">
                    {storeData.map((item, index) => (
                        <div key={index} className="about-item">
                            <img src={item.image} alt="About Us" className="about-image"/>
                            <div className="about-text">
                                <h1 className="about-title">About Us</h1>
                                <div className="about-content">
                                    <p>
                                        Welcome to Zen Books, a haven for book enthusiasts and the 
                                        leading online destination for literary content. Our story began in 2007, 
                                        with a simple mission: to connect people with the books they love. Since then, 
                                        we've grown into a trusted community for book lovers, authors, and publishers alike.
                                    </p>
                                    <p>
                                        We believe in the power of stories to inspire, educate, and transform lives. Our 
                                        carefully curated collection includes a wide range of genres, from timeless classics 
                                        to modern masterpieces, and everything in between. Whether you're a casual reader 
                                        or a devoted bibliophile, we're here to provide you with an exceptional reading 
                                        experience.
                                    </p>
                                    <p>
                                        Our commitment goes beyond just selling books. We're dedicated to fostering a 
                                        love of reading within our community. Through author events, book clubs, and 
                                        thoughtful recommendations, we strive to create a space where readers can 
                                        connect and share their passion for literature.
                                    </p>
                                    <p>
                                        Thank you for being a part of our journey. We're excited to continue growing 
                                        with you and bringing the joy of reading to people all over the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
