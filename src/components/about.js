import React from 'react';
import './AboutUs.css'
import image from './NewPortal.png'

const AboutUs = () => {
  return (
    <section className="about-us">
    <div className="container">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p className="tagline">Your Trusted Source for Reliable News, Insights, and Stories</p>
      </div>
      <div className="about-us-content">
        <div className="about-us-text">
          <p>
            Welcome to <strong>News Portal</strong>, where we deliver the latest headlines and in-depth coverage of 
            global events. Whether it's breaking news, entertainment updates, sports highlights, technological advancements, 
            or scientific discoveries, we are dedicated to keeping you informed, empowered, and ahead of the curve.
          </p>
          <p>
            Our mission is to ensure the accuracy, integrity, and timeliness of every story we publish. With a user-friendly 
            platform and curated categories, we aim to provide a seamless browsing experience tailored to your interests.
          </p>
          <p>
            At <strong>News Portal</strong>, we believe in the power of information to inspire change and bring people closer 
            to the truth. Thank you for choosing us as your go-to source for news.
          </p>
        </div>
        <div className="about-us-image">
          <img src={image} style={{height:"25rem"}} alt="About News Portal" />
        </div>
      </div>
      <div className="about-us-footer">
        <h3>Our Vision</h3>
        <p>
          To be the most trusted, inclusive, and innovative digital news platform globally.
        </p>
        <h3>Our Values</h3>
        <ul>
          <li><strong>Integrity:</strong> Upholding truth and transparency in every story.</li>
          <li><strong>Inclusivity:</strong> Representing diverse perspectives and voices.</li>
          <li><strong>Innovation:</strong> Delivering news through cutting-edge technology.</li>
        </ul>
      </div>
    </div>
  </section>
  
  );
};

export default AboutUs;
