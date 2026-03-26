
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { assets} from '../assets/assets';
// import Loader from '../components/Loader';
// import '../style/Cardetails.css'; 
// import { useAppContext } from '../context/AppContext';
// import toast from 'react-hot-toast';
// import {motion} from 'motion/react'

// const Cardetails = () => {
//   const { id } = useParams();
//  const {cars, axios, pickupDate, setPickupDate, returnDate, setReturnDate}= useAppContext()
//     const navigate=useNavigate()
//     const [car,setCar]=useState(null)
//     const currency=import.meta.env.VITE_CURRENCY

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//              const {data} = await axios.post('/api/bookings/create',{
//                  car: id,
//                  pickupDate,
//                  returnDate
//              })
//              if(data.success){
//                  toast.success(data.message)
//                  navigate('/my-bookings')
//              }else{
//                  toast.error(data.message)
//              }
//          } catch (error) {
//             toast.error(error.message) 
//          }
//   };

//   useEffect(()=>{
//     setCar(cars.find(car => car._id === id))
//   },[cars,id])

//   useEffect(() => {
//     if (!car) return;

//     const slider = document.getElementById('slider');
//     const nextButton = document.getElementById('next');
//     const prevButton = document.getElementById('prev');

//     if (!slider || !nextButton || !prevButton) return;

//     let currentSlide = 0;
//     const totalSlides = slider.children.length;

//     function goToSlide(index) {
//       const slideWidth = slider.children[0].clientWidth;
//       slider.style.transform = `translateX(-${index * slideWidth}px)`;
//     }

//     function nextSlide() {
//       currentSlide = (currentSlide + 1) % totalSlides;
//       goToSlide(currentSlide);
//     }

//     function prevSlide() {
//       currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//       goToSlide(currentSlide);
//     }

//     let slideInterval = setInterval(nextSlide, 3000);

//     function resetAutoSlide() {
//       clearInterval(slideInterval);
//       slideInterval = setInterval(nextSlide, 3000);
//     }

//     nextButton.addEventListener('click', () => {
//       nextSlide();
//       resetAutoSlide();
//     });

//     prevButton.addEventListener('click', () => {
//       prevSlide();
//       resetAutoSlide();
//     });

//     window.addEventListener('resize', () => goToSlide(currentSlide));

//     goToSlide(currentSlide);

//     return () => {
//       clearInterval(slideInterval);
//       nextButton.removeEventListener('click', nextSlide);
//       prevButton.removeEventListener('click', prevSlide);
//       window.removeEventListener('resize', () => goToSlide(currentSlide));
//     };
//   }, [car]);

//   if (!car) return <Loader />;

//   return (
//       <>
//         <div className="cardetails-container">
//           <div className='whole-area'>
//             <div className='card-area'>
//                  <button onClick={() => navigate(-1)} className="back-button">
//                   <img src={assets.arrow_icon} alt="back" />
//                   Back to all Vehicals
//                 </button>

//                 <motion.div 
//                 initial={{opacity:0, y:30}}
//                 animate={{opacity:1, y:0}}
//                 transition={{duration:0.5}}
//                 className="carousel">

//                   <button id="prev" className="carousel-button">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="carousel-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//                     </svg>
//                   </button>

//                   <div className="carousel-wrapper">
//                     <div className="carousel-slider" id="slider">
//                       {[1, 2, 3, 4, 5].map((_, i) => (
//                         <motion.img 
//                         initial={{ scale: 0.98, opacity:0}}
//                         animate={{ scale: 1, opacity: 1}}
//                         transition={{ duration: 0.5}}
//                         key={i} src={car.image} className="carousel-image" alt={`Slide ${i + 1}`} />
//                       ))}
//                     </div>
//                   </div>

//                   <button id="next" className="carousel-button">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="carousel-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>

                  
//                 </motion.div>
//                       </div>
//                       <div className='form-area'>
//                         <motion.form 
//                 initial={{ opacity: 0, y: 30}}
//                 animate={{ opacity: 1, y: 0}}
//                 transition={{ delay: 0.3, duration: 0.6}}
//                 onSubmit={handleSubmit} className="booking-form">
//                   <p className="price-line">
//                     {currency}{car.pricePerDay}
//                     <span>per day</span>
//                   </p>
//                   <hr />

//                   <div>
//                     <label htmlFor="pickup-date">Pickup Date</label>
//                     <input value={pickupDate} onChange={(e)=>setPickupDate(e.target.value)}
//                       type="date"
//                       required
//                       id="pickup-date"
//                       min={new Date().toISOString().split('T')[0]}
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="return-date">Return Date</label>
//                     <input value={returnDate} onChange={(e)=>setReturnDate(e.target.value)}
//                     type="date" required id="return-date" />
//                   </div>

//                   <button type="submit">Book Now</button>
//                   <p className="note">No credit card required to reserve</p>
//                 </motion.form>
//             </div>
//           </div>

          
//           {/* <div className='whole-area'> */}
                
//       <motion.div 
//       initial={{ opacity: 0}}
//       animate={{ opacity: 1}}
//       transition={{ delay: 0.2, duration: 0.5 }}
//       className="car-info">
//         <div className="car-title">
//           <h1>{car.brand} {car.model}</h1>
//           <p>{car.category} {car.year}</p>
//         </div>
//         <hr />

//         <div className="car-features">
//           {[
//             { icon: assets.users_icon, text: `${car.seating_capacity} Seats` },
//             { icon: assets.fuel_icon, text: car.fuel_type },
//             { icon: assets.car_icon, text: car.transmission },
//             { icon: assets.location_icon, text: car.location },
//           ].map(({ icon, text }) => (
//             <motion.div 
//             initial={{ opacity: 0, y:10}}
//             animate={{ opacity: 1, y: 0}}
//             transition={{ duration: 0.4 }}
//             key={text} className="feature-block">
//               <img src={icon} alt="" />
//               <span>{text}</span>
//             </motion.div>
//           ))}
//         </div>

//         <div className="car-description">
//           <h2>Description</h2>
//           <p>{car.description}</p>
//         </div>

//         <div className="car-feature-list">
//           <h2>Features</h2>
//           <ul>
//             {["bluetooth connectivity", "mobile holder", "gps", "smart lock", "sport riding modes"].map((item) => (
//               <li key={item}>
//                 <img src={assets.check_icon} alt="" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </motion.div>
//           </div>
//           <div className='whole-area'>
//         </div>
        
//       </>


//   );
// };

// export default Cardetails;

// // import React, { useEffect, useState } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import { assets } from '../assets/assets';
// // import Loader from '../components/Loader';
// // import '../style/Cardetails.css'; 
// // import { useAppContext } from '../context/AppContext';
// // import toast from 'react-hot-toast';
// // import { motion } from 'motion/react';

// // const Cardetails = () => {
// //   const { id } = useParams();
// //   const { cars, axios, pickupDate, setPickupDate, returnDate, setReturnDate } = useAppContext();
// //   const navigate = useNavigate();
// //   const [car, setCar] = useState(null);
// //   const currency = import.meta.env.VITE_CURRENCY;

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     navigate('/paymentpage', {
// //       state: {
// //         car,
// //         pickupDate,
// //         returnDate
// //       }
// //     });
// //   };

// //   useEffect(() => {
// //     setCar(cars.find(car => car._id === id));
// //   }, [cars, id]);

// //   useEffect(() => {
// //     if (!car) return;

// //     const slider = document.getElementById('slider');
// //     const nextButton = document.getElementById('next');
// //     const prevButton = document.getElementById('prev');

// //     if (!slider || !nextButton || !prevButton) return;

// //     let currentSlide = 0;
// //     const totalSlides = slider.children.length;

// //     function goToSlide(index) {
// //       const slideWidth = slider.children[0].clientWidth;
// //       slider.style.transform = `translateX(-${index * slideWidth}px)`;
// //     }

// //     function nextSlide() {
// //       currentSlide = (currentSlide + 1) % totalSlides;
// //       goToSlide(currentSlide);
// //     }

// //     function prevSlide() {
// //       currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
// //       goToSlide(currentSlide);
// //     }

// //     let slideInterval = setInterval(nextSlide, 3000);

// //     function resetAutoSlide() {
// //       clearInterval(slideInterval);
// //       slideInterval = setInterval(nextSlide, 3000);
// //     }

// //     nextButton.addEventListener('click', () => {
// //       nextSlide();
// //       resetAutoSlide();
// //     });

// //     prevButton.addEventListener('click', () => {
// //       prevSlide();
// //       resetAutoSlide();
// //     });

// //     window.addEventListener('resize', () => goToSlide(currentSlide));

// //     goToSlide(currentSlide);

// //     return () => {
// //       clearInterval(slideInterval);
// //       nextButton.removeEventListener('click', nextSlide);
// //       prevButton.removeEventListener('click', prevSlide);
// //       window.removeEventListener('resize', () => goToSlide(currentSlide));
// //     };
// //   }, [car]);

// //   if (!car) return <Loader />;

// //   return (
// //     <>
// //       <div className="cardetails-container">
// //         <div className='whole-area'>
// //           <div className='card-area'>
// //             <button onClick={() => navigate(-1)} className="back-button">
// //               <img src={assets.arrow_icon} alt="back" />
// //               Back to all Vehicals
// //             </button>

// //             <motion.div
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5 }}
// //               className="carousel"
// //             >
// //               <button id="prev" className="carousel-button">
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="carousel-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
// //                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
// //                 </svg>
// //               </button>

// //               <div className="carousel-wrapper">
// //                 <div className="carousel-slider" id="slider">
// //                   {[1, 2, 3, 4, 5].map((_, i) => (
// //                     <motion.img
// //                       key={i}
// //                       initial={{ scale: 0.98, opacity: 0 }}
// //                       animate={{ scale: 1, opacity: 1 }}
// //                       transition={{ duration: 0.5 }}
// //                       src={car.image}
// //                       className="carousel-image"
// //                       alt={`Slide ${i + 1}`}
// //                     />
// //                   ))}
// //                 </div>
// //               </div>

// //               <button id="next" className="carousel-button">
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="carousel-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
// //                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
// //                 </svg>
// //               </button>
// //             </motion.div>
// //           </div>

// //           <div className='form-area'>
// //             <motion.form
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.3, duration: 0.6 }}
// //               onSubmit={handleSubmit}
// //               className="booking-form"
// //             >
// //               <p className="price-line">
// //                 {currency}{car.pricePerDay}
// //                 <span>per day</span>
// //               </p>
// //               <hr />

// //               <div>
// //                 <label htmlFor="pickup-date">Pickup Date</label>
// //                 <input
// //                   value={pickupDate}
// //                   onChange={(e) => setPickupDate(e.target.value)}
// //                   type="date"
// //                   required
// //                   id="pickup-date"
// //                   min={new Date().toISOString().split('T')[0]}
// //                 />
// //               </div>

// //               <div>
// //                 <label htmlFor="return-date">Return Date</label>
// //                 <input
// //                   value={returnDate}
// //                   onChange={(e) => setReturnDate(e.target.value)}
// //                   type="date"
// //                   required
// //                   id="return-date"
// //                 />
// //               </div>

// //               <button type="submit">Pay Now</button>
// //               <p className="note">No credit card required to reserve</p>
// //             </motion.form>
// //           </div>
// //         </div>

// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 0.2, duration: 0.5 }}
// //           className="car-info"
// //         >
// //           <div className="car-title">
// //             <h1>{car.brand} {car.model}</h1>
// //             <p>{car.category} {car.year}</p>
// //           </div>
// //           <hr />

// //           <div className="car-features">
// //             {[
// //               { icon: assets.users_icon, text: `${car.seating_capacity} Seats` },
// //               { icon: assets.fuel_icon, text: car.fuel_type },
// //               { icon: assets.car_icon, text: car.transmission },
// //               { icon: assets.location_icon, text: car.location },
// //             ].map(({ icon, text }) => (
// //               <motion.div
// //                 key={text}
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.4 }}
// //                 className="feature-block"
// //               >
// //                 <img src={icon} alt="" />
// //                 <span>{text}</span>
// //               </motion.div>
// //             ))}
// //           </div>

// //           <div className="car-description">
// //             <h2>Description</h2>
// //             <p>{car.description}</p>
// //           </div>

// //           <div className="car-feature-list">
// //             <h2>Features</h2>
// //             <ul>
// //               {["bluetooth connectivity", "mobile holder", "gps", "smart lock", "sport riding modes"].map(item => (
// //                 <li key={item}>
// //                   <img src={assets.check_icon} alt="" />
// //                   {item}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Cardetails;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { assets} from '../assets/assets';
import Loader from '../components/Loader';
import '../style/Cardetails.css'; 
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import {motion} from 'motion/react'

const Cardetails = () => {
  const { id } = useParams();
 const {cars, axios, pickupDate, setPickupDate, returnDate, setReturnDate}= useAppContext()
    const navigate=useNavigate()
    const [car,setCar]=useState(null)
    const currency=import.meta.env.VITE_CURRENCY

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/paymentpage', {
       state: {
         car,
         pickupDate,
         returnDate
        }
       });
    };

  useEffect(()=>{
    setCar(cars.find(car => car._id === id))
  },[cars,id])

  useEffect(() => {
    if (!car) return;

    const slider = document.getElementById('slider');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    if (!slider || !nextButton || !prevButton) return;

    let currentSlide = 0;
    const totalSlides = slider.children.length;

    function goToSlide(index) {
      const slideWidth = slider.children[0].clientWidth;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      goToSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      goToSlide(currentSlide);
    }

    let slideInterval = setInterval(nextSlide, 3000);

    function resetAutoSlide() {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 3000);
    }

    nextButton.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });

    prevButton.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });

    window.addEventListener('resize', () => goToSlide(currentSlide));

    goToSlide(currentSlide);

    return () => {
      clearInterval(slideInterval);
      nextButton.removeEventListener('click', nextSlide);
      prevButton.removeEventListener('click', prevSlide);
      window.removeEventListener('resize', () => goToSlide(currentSlide));
    };
  }, [car]);

  if (!car) return <Loader />;

  return (
      <>
        <div className="cardetails-container">
          <div className='whole-area'>
            <div className='card-area'>
                 <button onClick={() => navigate(-1)} className="back-button">
                  <img src={assets.arrow_icon} alt="back" />
                  Back to all Vehicals
                </button>

                <motion.div 
                initial={{opacity:0, y:30}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5}}
                className="carousel">

                  <button id="prev" className="carousel-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="carousel-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div className="carousel-wrapper">
                    <div className="carousel-slider" id="slider">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <motion.img 
                        initial={{ scale: 0.98, opacity:0}}
                        animate={{ scale: 1, opacity: 1}}
                        transition={{ duration: 0.5}}
                        key={i} src={car.image} className="carousel-image" alt={`Slide ${i + 1}`} />
                      ))}
                    </div>
                  </div>

                  <button id="next" className="carousel-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="carousel-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  
                </motion.div>
                      </div>
                      <div className='form-area'>
                        <motion.form 
                initial={{ opacity: 0, y: 30}}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 0.3, duration: 0.6}}
                onSubmit={handleSubmit} className="booking-form">
                  <p className="price-line">
                    {currency}{car.pricePerDay}
                    <span>per day</span>
                  </p>
                  <hr />

                  <div>
                    <label htmlFor="pickup-date">Pickup Date</label>
                    <input value={pickupDate} onChange={(e)=>setPickupDate(e.target.value)}
                      type="date"
                      required
                      id="pickup-date"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <label htmlFor="return-date">Return Date</label>
                    <input value={returnDate} onChange={(e)=>setReturnDate(e.target.value)}
                    type="date" required id="return-date" />
                  </div>

                  <button type="submit">Book Now</button>
                  <p className="note">No credit card required to reserve</p>
                </motion.form>
            </div>
          </div>

          
          {/* <div className='whole-area'> */}
                
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="car-info">
        <div className="car-title">
          <h1>{car.brand} {car.model}</h1>
          <p>{car.category} {car.year}</p>
        </div>
        <hr />

        <div className="car-features">
          {[
            { icon: assets.users_icon, text: `${car.seating_capacity} Seats` },
            { icon: assets.fuel_icon, text: car.fuel_type },
            { icon: assets.car_icon, text: car.transmission },
            { icon: assets.location_icon, text: car.location },
          ].map(({ icon, text }) => (
            <motion.div 
            initial={{ opacity: 0, y:10}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.4 }}
            key={text} className="feature-block">
              <img src={icon} alt="" />
              <span>{text}</span>
            </motion.div>
          ))}
        </div>


        <div className="car-feature-list">
          <h2>Features</h2>
          <ul>
            {["bluetooth connectivity", "mobile holder", "gps", "smart lock", "sport riding modes"].map((item) => (
              <li key={item}>
                <img src={assets.check_icon} alt="" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        
        <div className="car-description">
          <h2>Description</h2>
          <p>{car.description}</p>
        </div>
      </motion.div>
          </div>
          <div className='whole-area'>
        </div>
        
      </>


  );
};

export default Cardetails;