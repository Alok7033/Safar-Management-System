import React from 'react';
import { assets } from '../assets/assets';
import '../style/Footer.css'; // Adjust the path if needed
import { motion} from 'motion/react'

const Footer = () => {
  return (
    <motion.div 
         initial={{ opacity: 0, y:30}}
         whileInView={{ opacity: 1, y:0}}
         transition={{  duration: 0.6}}
    className="footer-wrapper">
      <motion.div 
        initial={{ opacity: 0, y:20}}
         whileInView={{ opacity: 1, y:0}}
         transition={{  duration: 0.6, delay: 0.2 }}
      className="footer-container">
        <div className="footer-top">
          {/* Logo + Description + Social Links */}
          <div>
            <motion.img 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{  duration: 0.5, delay:0.3}}
            src={assets.logo} alt="logo" className="footer-logo" />

            <motion.p 
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              transition={{  duration: 0.5, delay:0.4}}
              className="footer-description">
              Premium Bike rental service with a wide selection of luxury and everyday vehicles
              for all your driving needs.
            </motion.p>
          
            <motion.div 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{  duration: 0.5, delay:0.5}}
            className="footer-socials">
              <a href="https://www.facebook.com/share/1L99tDaE8J/"><img src={assets.facebook_logo} alt="Facebook" className="footer-icon" /></a>
              <a href="https://www.instagram.com/_alok___jha?igsh=MWpwOXUzNXQxeTJmbA=="><img src={assets.instagram_logo} alt="Instagram" className="footer-icon" /></a>
              <a href="#"><img src={assets.twitter_logo} alt="Twitter" className="footer-icon" /></a>
              <a href="jha09752@gmail.com"><img src={assets.gmail_logo} alt="Gmail" className="footer-icon" /></a>
            </motion.div>
          </div>

         
        
        <motion.div 
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y:0}}
            transition={{  duration: 0.6, delay:0.4}}
            
         > 
            <h2 className="footer-heading">Quick line</h2>
            <ul className="footer-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Browse cars</a></li>
              <li><a href="#">List your cars</a></li>
              <li><a href="#">About us</a></li>
            </ul>
          </motion.div>

          {/* Resources */}
            <motion.div 
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y:0}}
            transition={{  duration: 0.6, delay:0.4}}
            
         >
            <h2 className="footer-heading">Resources</h2>
            <ul className="footer-list">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms and service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Insurance</a></li>
            </ul>
         </motion.div>

          {/* Contact */}
             <motion.div 
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y:0}}
            transition={{  duration: 0.6, delay:0.4}}
            
         >
            <h2 className="footer-heading">Contact</h2>
            <ul className="footer-list">
              <li>Shri Ram College</li>
              <li>Parikarma Marg, 251001</li>
              <li><a href="#">+91 8434199006</a></li>
              <li><a href="#">info@safar.com</a></li>
            </ul>
          </motion.div>

          
        </div>
        

        {/* Bottom Section */}
        <motion.div 
            initial={{ opacity: 0, y:10}}
            whileInView={{ opacity: 1, y:0}}
            transition={{  duration: 0.6, delay:0.6}}
        className="footer-bottom">
          <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
          <ul className="footer-policy">
            <li><a href="#">Privacy</a></li>
            <li>|</li>
            <li><a href="#">Terms</a></li>
            <li>|</li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
