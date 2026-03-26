import React from 'react';
import Title from './Title';
import { assets } from '../assets/assets';
import CarCard from './CarCard';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import '../style/FeaturedSection.css';
import {delay, motion} from 'motion/react'

const FeaturedSection = () => {
  const navigate = useNavigate();
  const {cars} = useAppContext()

  return (
    <motion.div 
    initial={{ opacity: 0, y: 40}}
    whileInView={{ opacity: 1, y: 0}}
    transition={{ duration: 1, ease: "easeOut"}}
    className="featured-wrapper">
      {/* Section Title */}
      <motion.div 
      initial={{ opacity: 0, y: 20}}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 1, delay: 0.5}}
      >
        <Title
          title="Featured Vehicles"
          subTitle="Explore our selection of premium vehicles available for your next adventure."
        />
      </motion.div>

      {/* Car Grid */}
      <motion.div 
      initial={{opacity: 0, y: 100}}
      whileInView={{ opacity:  1, y: 0}}
      transition={{delay: 0.5, duration: 1}}
      className="car-grid">
        {cars.slice(0, 3).map((car) => (
          <motion.div 
          initial={{opacity: 0, scale: 0.95}}
          whileInView={{ opacity:  1, scale: 1 }}
          transition={{delay: 0.5, ease: "easeOut" }}
          key={car._id}>
            <CarCard car={car} />
          </motion.div>
        ))}
      </motion.div>

      {/* Explore Button */}
      <motion.button
          initial={{opacity: 0, y: 20}}
          whileInView={{ opacity:  1, y: 0 }}
          transition={{delay: 0.5, duration: 0.4}}

        onClick={() => {
          navigate('/cars');
          scrollTo(0, 0);
        }}
        className="explore-btn"
      >
        Explore all Vehicles <img src={assets.arrow_icon} alt="arrow" />
      </motion.button>
    </motion.div>
  );
};

export default FeaturedSection;
