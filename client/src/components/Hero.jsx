
import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import Loc from './Loc'; // Import Loc component
import '../style/Hero.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [showLocationModal, setShowLocationModal] = useState(false); // Modal toggle
  const { pickupDate, setPickupDate, returnDate, setReturnDate, navigate } = useAppContext();

  const handelSearch = (e) => {
    e.preventDefault();
    navigate('/car?pickupLocation=' + pickupLocation + '&pickupDate=' + pickupDate + '&returnDate=' + returnDate);
  };

  // Callback when city is selected
  const handleCitySelect = (city) => {
    setPickupLocation(city);
    setShowLocationModal(false); // close modal
  };

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="hero-wrapper"
    >
      <motion.h1 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-heading"
      >
        Bikes_Scooter on Rent
      </motion.h1>

      <motion.form 
        initial={{ scale: 0.95, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={handelSearch}
        className="hero-form"
      >
        <div className="form-fields">

          {/* Select City Button */}
          <div className="form-group">
            <button
              type="button"
              onClick={() => setShowLocationModal(true)}
              className="select-city-btn"
            >
              {/* 📍 {pickupLocation ? pickupLocation : 'Select City'} */}
              <LocationOnIcon/> Select City
            </button>
            <p className="helper-text">
              {pickupLocation ? pickupLocation : 'Please select location'}
            </p>
          </div>

          {/* Pickup Date */}
          <div className="form-group">
            <label htmlFor="pickup-date">Pickup Date</label>
            <input
              value={pickupDate}
              onChange={e => setPickupDate(e.target.value)}
              type="date"
              id="pickup-date"
              className="date-input"
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          {/* Return Date */}
          <div className="form-group">
            <label htmlFor="return-date">Return Date</label>
            <input
              value={returnDate}
              onChange={e => setReturnDate(e.target.value)}
              type="date"
              id="return-date"
              className="date-input"
              required
            />
          </div>
        </div>
{/* 
        {/* Search Button 
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="form-btn"
        >
          <img src={assets.search_icon} alt="search" className="search-icon" />
          Search
        </motion.button> */}
      </motion.form>

      {/* Hero Image */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hero-image-container"
      >
        <img src={assets.main_car} alt="car" className="hero-image" />
      </motion.div>

      {/* Location Modal */}
      {showLocationModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setShowLocationModal(false)}>✖</button>
            <Loc onCitySelect={handleCitySelect} />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Hero;

