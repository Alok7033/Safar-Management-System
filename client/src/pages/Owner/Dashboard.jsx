import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import Title from '../../components/Owner/Title';
import '../../style/Dashboard.css'; // Import custom styles
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import Car from '../../../../server/models/Bike.js';

const Dashboard = () => {
 const {axios, isOwner, currency}= useAppContext()

  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  });

  const dashboardCards = [
    { title: "Total Vehicals", value: data.totalCars, icon: assets.carIconColored },
    { title: "Total Bookings", value: data.totalBookings, icon: assets.listIconColored },
    { title: "Pending", value: data.pendingBookings, icon: assets.cautionIconColored },
    { title: "Confirmed", value: data.completedBookings, icon: assets.listIconColored },
  ];
const fetchDashboardData = async ()=>{
   try {
    const {data} = await axios.get('/api/owner/dashboard')
    if(data.success){
      setData(data.dashboardData)
    }else{
      toast.error(data.message)
    }
   } catch (error) {
    toast.error(error.message)
   }
}

useEffect(()=>{
  if(isOwner){
    fetchDashboardData()
  }
},[isOwner])

  return (
    <div className="container-fluid pt-4 px-4 dashboard-container">
      <Title 
        title="Admin Dashboard" 
        subtitle="Monitor overall platform performance including total cars, bookings, revenue, and recent activities" 
      />

      {/* Cards */}
      <div className="row g-4 my-4">
        {dashboardCards.map((card, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="card dashboard-card p-3 d-flex justify-content-between align-items-center flex-row">
              <div>
                <h6 className="text-muted">{card.title}</h6>
                <h5 className="fw-semibold">{card.value}</h5>
              </div>
              <div className="icon-wrapper">
                <img src={card.icon} alt={card.title} className="icon-img" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom section */}
      <div className="row g-4 dashboard-bottom">

        {/* Recent Bookings */}
        <div className="col-lg-8">
          <div className="card p-4 recent-bookings">
            <h5 className="mb-1">Recent Booking</h5>
            <p className="text-muted mb-3">Latest customer bookings</p>
            {data.recentBookings.map((booking, index) => (
              <div className="d-flex justify-content-between align-items-center mb-3" key={index}>
                <div className="d-flex align-items-center gap-3">
                  <div className="d-none d-md-flex align-items-center justify-content-center bg-light rounded-circle icon-bg">
                    <img src={assets.listIconColored} alt="" className="icon-img-sm" />
                  </div>
                  <div>
                    <p className="mb-0 fw-medium">{booking.car.brand} {booking.car.model}</p>
                    <small className="text-muted">{booking.createdAt.split('T')[0]}</small>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted small">{currency} {booking.price}</span>
                  <span className="badge rounded-pill border border-secondary text-secondary">{booking.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="col-lg-4">
          <div className="card p-4 monthly-revenue">
            <h5 className="mb-1">Monthly Revenue</h5>
            <p className="text-muted">Revenue for current month</p>
            <h3 className="text-primary mt-4 fw-bold">{currency}{data.monthlyRevenue}</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
