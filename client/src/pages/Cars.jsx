import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import { assets} from '../assets/assets';
import CarCard from '../components/CarCard';
import '../style/Cars.css'; 
import { useSearchParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import {motion} from 'motion/react'

const Cars = () => {

  //getting search params from url
  const [searchParams] = useSearchParams()
 const pickupLocation = searchParams.get('pickupLocation')
  const pickupDate = searchParams.get('pickupDate')
  const returnDate = searchParams.get('returnDate')

  const { cars, axios } = useAppContext()

  const [input, setInput] = useState('');
  const isSearchData = pickupLocation && pickupDate && returnDate
  const [filteredCars, setFilteredCars] = useState([])
 
 const applyFilter = async()=>{
  if(input === ''){
    setFilteredCars(cars)
    return null
     }
  

     const filtered = cars.slice().filter((car)=>{
     return  car.brand.toLowerCase().includes(input.toLowerCase()) 
       || car.model.toLowerCase().includes(input.toLowerCase()) 
       || car.category.toLowerCase().includes(input.toLowerCase()) 
       || car.transmission.toLowerCase().includes(input.toLowerCase())
      })
      setFilteredCars(filtered)
  }
 
  const searchCarAvilablity = async()=>{
    const {data} = await axios.post('/api/bookings/check-availability',
      {location: pickupLocation, pickupDate, returnDate}
    )
    if (data.success){
      setFilteredCars(data.availableCars)
      if(data.availableCars.length===0){
        toast('No cars available')
      }
      return null
    }
  }

  useEffect(()=>{
    isSearchData && searchCarAvilablity()
  },[])

  useEffect(()=>{
    cars.length > 0 && !isSearchData && applyFilter()
  },[input, cars])

  return (
    <div>
      <motion.div 
      initial={{ opacity:0, y:30}}
      animate={{ opacity:1, y:0}}
      transition={{ duration: 0.6, ease:'easeOut'}}
      className="cars-hero">
        <Title
          title="Available Vehicals"
          subTitle="Browse our selection of premium vehicles available for your next adventure"
        />
        <motion.div 
          initial={{ opacity:0, y:20}}
          animate={{ opacity:1, y:0}}
          transition={{ duration: 0.3, delay:0.5}}
         className="cars-search-box">
          <img src={assets.search_icon} alt="Search" className="icon" />
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search by make, model, or features"
            className="search-input"
          />
          <img src={assets.filter_icon} alt="Filter" className="icon" />
        </motion.div>
      </motion.div>

      <motion.div 
          initial={{ opacity:0}}
          animate={{ opacity:1}}
          transition={{ duration: 0.5, delay:0.6}}
          className="cars-results-container">
        <p className="cars-count">Showing {filteredCars.length} Vehicals</p>
     <div className="cars-grid">
        {filteredCars.map((car, index) => (
          <motion.div 
            key={index}
            initial={{ opacity:0, y:20}}
            animate={{ opacity:1, y:0}}
            transition={{ delay:0.1 * index, duration:0.4 }}
          >
            <CarCard car={car} />
          </motion.div>
        ))}
      </div>

      </motion.div>
    </div>
  );
};

export default Cars;
