import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/Title'
import '../../style/ManageCars.css'  // Custom CSS imported here
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const ManageCars = () => {
  const { isOwner, axios, currency } = useAppContext()
  const [cars, setCars] = useState([])

  const fetchOwnerCars = async () => {
    try {
      const { data } = await axios.get('/api/owner/cars')
      if (data.success) {
        setCars(data.cars)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const toggleAvailability = async (carId) => {
    try {
      const { data } = await axios.post('/api/owner/toggle-car', { carId })
      if (data.success) {
        toast.success(data.message)
        fetchOwnerCars()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const deleteCar = async (carId) => {
    try {
      const confirm = window.confirm('Are you sure you want to delete this Bike?')
      if (!confirm) return null

      const { data } = await axios.post('/api/owner/delete-car', { carId })
      if (data.success) {
        toast.success(data.message)
        fetchOwnerCars()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    isOwner && fetchOwnerCars()
  }, [isOwner])

  return (
    <div className="manage-cars-container">
      <Title
        title="Manage Vehicals"
        subtitle="View all listed cars, update their details, or remove them from the booking platform"
      />

      <div className="table-responsive mt-4">
        <table className="table table-bordered text-nowrap align-middle mb-0">
          <thead className="table-light text-muted">
            <tr>
              <th scope="col">Vehicals</th>
              <th scope="col" className="d-none d-md-table-cell">Category</th>
              <th scope="col">Price</th>
              <th scope="col" className="d-none d-md-table-cell">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car, index) => (
              <tr key={index}>
                <td className="d-flex align-items-center gap-3">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="car-image"
                  />
                  <div className="d-none d-md-block">
                    <p className="mb-0 fw-semibold">{car.brand} {car.model}</p>
                    <small className="text-muted">
                      {car.seating_capacity} seats • {car.transmission}
                    </small>
                  </div>
                </td>

                <td className="d-none d-md-table-cell">{car.category}</td>

                <td>{currency}{car.pricePerDay}/day</td>

                <td className="d-none d-md-table-cell">
                  <span className={`status-badge ${car.isAvailable ? 'status-available' : 'status-unavailable'}`}>
                    {car.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </td>

                <td className="d-flex align-items-center gap-3">
                  <img
                    onClick={() => toggleAvailability(car._id)}
                    src={car.isAvailable ? assets.eye_close_icon : assets.eye_icon}
                    alt="Toggle visibility"
                    className="action-icon cursor-pointer"
                  />

                  <img
                    onClick={() => deleteCar(car._id)}
                    src={assets.delete_icon}
                    alt="Delete car"
                    className="action-icon cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageCars
