
import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import '../style/Mybooking.css'; // ✅ External CSS import
import {motion} from 'motion/react'


const Mybooking = () => {
  const { axios, user, currency } = useAppContext()
  const [bookings, setBookings] = useState([])

  const fetchMyBookings = async () => {
    try {
      const { data } = await axios.get('/api/bookings/user')
      if (data.success) {
        setBookings(data.bookings)
        console.log("Bookings loaded:", data.bookings)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    user && fetchMyBookings()
  }, [user])

  return (
    <motion.div 
    initial={{ opacity:0, y:30}}
    animate={{ opacity: 1, y: 0}}
    transition={{ duration: 0.6}}
    className="mybooking-container">
      <Title
        title="My Booking"
        subtitle="View and manage your all car bookings"
        align="left"
      />

      <div>
        {bookings.map((booking, index) => (
          <motion.div
          initial={{ opacity:0, y: 20}}
          animate={{ opacity:1, y:0}}
          transition={{ delay: index * 0.1, duration:0.4 }}
          
           key={booking._id} className="booking-card">
            {/* Car image + info */}
            <div className="car-info">
              <div className="car-image">
                <img
                  src={booking.car.image}
                  alt=""
                  className="image"
                />
              </div>
              <p className="car-title">{booking.car.brand} {booking.car.model}</p>
              <p className="car-subtitle">{booking.car.year} {booking.car.category} {booking.car.location}</p>
            </div>

            {/* Booking info */}
            <div className="booking-details">
              <div className="booking-status-row">
                <p className="booking-number">Booking #{index + 1}</p>
                <p className={`status-badge ${booking.status === 'confirmed' ? 'confirmed' : 'cancelled'}`}>
                  {booking.status}
                </p>
              </div>

              <div className="info-row">
                <img src={assets.calendar_icon_colored} alt="" className="icon" />
                <div>
                  <p className="label">Rental Period</p>
                  <p>{booking.pickupDate.split('T')[0]} To {booking.returnDate.split('T')[0]}</p>
                </div>
              </div>

              <div className="info-row">
                <img src={assets.location_icon_colored} alt="" className="icon" />
                <div>
                  <p className="label">Pick-up location</p>
                  <p>{booking.car.location}</p>
                </div>
              </div>
            </div>

            {/* Price info */}
            <div className="price-info">
              <div className="price-text">
                <p>Total Price</p>
                <h1>{currency}{booking.price}</h1>
                <p>Booked on {booking.createdAt.split('T')[0]}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Mybooking;

