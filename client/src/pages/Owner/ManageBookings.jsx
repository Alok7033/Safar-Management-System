import React, { useEffect, useState } from 'react';

import Title from '../../components/Owner/Title';
import '../../style/ManageBookings.css';
import { useAppContext } from '../../context/AppContext';
import { Axios } from 'axios';
import toast from 'react-hot-toast';

const ManageBookings = () => {
  const { currency, axios} = useAppContext()
  const [bookings, setBookings] = useState([]);
 
  const fetchOwnerBookings = async ()=>{
    try {
      const {data} = await axios.get('/api/bookings/owner')
      data.success ? setBookings(data.bookings): toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const fetchBookingStatus = async (bookingId, status)=>{
    try {
      const {data} = await axios.post('/api/bookings/change-status',{bookingId, status})
      if(data.success){
        toast.success(data.message)
        fetchOwnerBookings()
      }else{
        toast.error(error.message)
      }
      
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchOwnerBookings();
  }, []);

  return (
    <div className="manage-bookings-wrapper px-3 pt-4">
      <Title
        title="Manage Bookings"
        subtitle="Track all listed cars, update their details, or remove them from the booking platform"
      />

      <div className="custom-table-wrapper mt-4 shadow-sm p-3 bg-white rounded">
        <div className="table-responsive">
          <table className="table table-hover align-middle custom-table mx-auto">
            <thead className="table-light">
              <tr>
                <th>Vehicals</th>
                <th className="d-none d-md-table-cell">Date Range</th>
                <th>Total</th>
                <th className="d-none d-md-table-cell">Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={booking.car.image}
                        alt={`${booking.car.brand} ${booking.car.model}`}
                        className="car-img"
                      />
                      <div className="fw-semibold d-none d-md-block">
                        {booking.car.brand} {booking.car.model}
                      </div>
                    </div>
                  </td>

                  <td className="d-none d-md-table-cell">
                    {booking.pickupDate.split('T')[0]} to {booking.returnDate.split('T')[0]}
                  </td>

                  <td>{currency} {booking.price}</td>

                  <td className="d-none d-md-table-cell">
                    <span className="badge bg-light text-dark px-3 py-1">Offline</span>
                  </td>

                  <td>
                    {booking.status === 'pending' ? (
                      <select onChange = {e => changeBookingStatus(booking._id,e.target.value)}
                        value={booking.status}
                        className="form-select form-select-sm status-select"
                        // onChange={(e) => {
                        //   const updatedBookings = [...bookings];
                        //   updatedBookings[index].status = e.target.value;
                        //   setBookings(updatedBookings);
                        // }}
                      >
                        <option value="pending">Pending</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="confirmed">Confirmed</option>
                      </select>
                    ) : (
                      <span
                        className={`badge rounded-pill px-3 py-2 fw-semibold ${
                          booking.status === 'confirmed'
                            ? 'bg-success-subtle text-success'
                            : 'bg-danger-subtle text-danger'
                        }`}
                      >
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBookings;
