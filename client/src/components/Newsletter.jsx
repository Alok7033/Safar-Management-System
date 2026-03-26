

import React from 'react';
import '../style/Newsletter.css'; // Adjust path if necessary
import { motion} from 'motion/react'

const Newsletter = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 30}}
    whileInView={{ opacity: 1, y: 0}}
    viewport={{ once: true, amount: 0.3}}
    className="newsletter-wrapper">
      <div className="newsletter-container">
        <motion.h1 
        initial={{ opacity: 0, y:20}}
        whileInView={{ opacity: 1, y:0}}
        transition={{ delay: 0.2, duration: 0.5}}
        className="newsletter-heading">Never Miss a Deal!</motion.h1>
        <motion.p 
        initial={{ opacity: 0, y:20}}
        whileInView={{ opacity: 1, y:0}}
        transition={{ delay: 0.3, duration: 0.5}}
        className="newsletter-subtext">
          Subscribe to get the latest offers, new arrivals, and exclusive discounts
        </motion.p>
        <motion.form 
         initial={{ opacity: 0, y:20}}
         whileInView={{ opacity: 1, y:0}}
         transition={{ delay: 0.4, duration: 0.5}}
        className="newsletter-form">
          <input
            className="newsletter-input"
            type="text"
            placeholder="Enter your email id"
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Newsletter;

