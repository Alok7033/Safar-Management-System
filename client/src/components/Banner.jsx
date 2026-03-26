import React from 'react';
import { assets } from '../assets/assets';
import '../style/Banner.css'; // Make sure this path matches your folder structure
import { motion} from 'motion/react'

const Banner = () => {
  return (
    <motion.div 
    initial={{ opacity:0, y: 50}}
    whileInView={{ opacity:1, y:0}}
    transition={{ duration: 0.6}}
    className="banner-wrapper">
      <div className="banner-container">
        <div className="banner-text">
          <h2 className="banner-heading">Ride More, Spend Less</h2>
          <p className="banner-description">
            Whether you're exploring a new city, commuting through busy streets, Choose your Bike to match your pace, style, and destination.
          </p>
          <p className="banner-highlight">
            No traffic, no stress—just smooth rides and unforgettable moments.
          </p>
          <motion.button 
          whileHover={{ scale: 1.05}}
          whileTap={{ scale: 0.95 }}
          className="banner-button">
          List your Bike/Scooter
          </motion.button>
        </div>

        <motion.img 
        initial={{ opacity: 0, x: 50}}
        whileInView={{ opacity:1, X:0}}
        transition={{ duration: 0.6, delay: 0.4 }}
        src={assets.banner_car_image} alt="car" className="banner-image" />
      </div>
    </motion.div>
  );
};

export default Banner;


