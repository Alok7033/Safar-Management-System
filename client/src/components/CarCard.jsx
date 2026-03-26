// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'

// const CarCard = ({car}) => {

     
//     const currency=import.meta.env.VITE_CURRENCY
//     const navigate=useNavigate()
    
//   return (
//     <div onClick={() => {navigate(`/car-details/${car._id}`); scrollTo(0,0)}} className='group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-all duration-500 bg-white cursor-pointer'>
       
//        <div className='realtive h-55 w-full overflow-hidden '>
           
//            {car.isAvaliable && <p className='absolute top4 left=4 bg-blue-600 text-white text-xs px-2.5 py-2 rounded-full'>Available Now</p>}
//             <img src={car.image} alt="Car Image" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'/>
            
            
//             <div className='absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg'>
//                 <span className='font-semibold'>{currency}{car.pricePerDay}</span>
//                 <span className='text-sm text-white/80'>/day</span>

//             </div>
//        </div>


//        <div className='p-4 sm:p-5'>
//         <div className='flex justify-between items-start mb-2'>
//             <div>
//                 <h3 className='text-lg font-medium'>{car.brand}     {car.model}</h3>
//                 <p className='text-muted-foreground text-sm'>{car.category}     {car.year}</p>
//             </div>
//         </div>

//         <div className='mt-4 grid grid-cols-2 gap-y-2 text-gray-600'>
//             <div className='flex items-center text-sm text-muted-foreground'>
//                 <img src={assets.users_icon} alt="" className='h-4 mr-2'/>
//                 <span>{car.seating_capacity} </span>
//             </div>
//             <div className='flex items-center text-sm text-muted-foreground'>
//                 <img src={assets.fuel_icon} alt="" className='h-4 mr-2'/>
//                 <span>{car.fuel_type} </span>
//             </div>
//             <div className='flex items-center text-sm text-muted-foreground'>
//                 <img src={assets.car_icon} alt="" className='h-4 mr-2'/>
//                 <span>{car.transmission} </span>
//             </div>
//             <div className='flex items-center text-sm text-muted-foreground'>
//                 <img src={assets.location_icon} alt="" className='h-4 mr-2'/>
//                 <span>{car.location}</span>
//             </div>
//         </div>
//        </div>
//     </div>
//   )
// }

// export default CarCard

import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import '../style/CarCard.css';  // CSS file import karein

const CarCard = ({ car }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/car-details/${car._id}`);
        window.scrollTo(0, 0);
      }}
      className="carcard-container"
    >
      <div className="carcard-image-wrapper">
        {car.isAvaliable && (
          <p className="carcard-available-badge">Available Now</p>
        )}
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="carcard-image"
        />
        <div className="carcard-price-tag">
          <span className="carcard-price">{currency}{car.pricePerDay}</span>
          <span className="carcard-price-unit">/day</span>
        </div>
      </div>

      <div className="carcard-content">
        <div className="carcard-header">
          <div>
            <h3 className="carcard-title">{car.brand} {car.model}</h3>
            <p className="carcard-subtitle">{car.category} {car.year}</p>
          </div>
        </div>

        <div className="carcard-specs">
          <div className="carcard-spec">
            <img src={assets.users_icon} alt="Seating Capacity" className="carcard-icon" />
            <span>{car.seating_capacity}</span>
          </div>
          <div className="carcard-spec">
            <img src={assets.fuel_icon} alt="Fuel Type" className="carcard-icon" />
            <span>{car.fuel_type}</span>
          </div>
          <div className="carcard-spec">
            <img src={assets.car_icon} alt="Transmission" className="carcard-icon" />
            <span>{car.transmission}</span>
          </div>
          <div className="carcard-spec">
            <img src={assets.location_icon} alt="Location" className="carcard-icon" />
            <span>{car.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
