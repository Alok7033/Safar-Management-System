// import React, { useState } from 'react'
// import Title from '../../components/Owner/Title'
// import { assets } from '../../assets/assets'

// const Addcar = () => {

//   const currency=import.meta.env.VITE_CURRENCY

//   const [image,setImage]=useState(null)
//   const [car,setCar] = useState({
//     brand:'',
//     model:'',
//     year:'',
//     pricePerDay:'',
//     category:'',
//     transmission:'',
//     fuel_type:'',
//     seating_capacity:'',
//     location:'',
//     description:'',
//   })

//   const onSubmitHander =async (e) =>{
//     e.preventDefault()
//   }
//   return (
//     <div className='px-4 py-10 md:px-10 flex-1'>
//       <Title title="Add New car" subtitle="fill in details to list a new car for booking , including pricing , availability , and car specification."/>

//       <form onSubmit={onSubmitHander} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>

//         {/* car image */}
//         <div className='flex items-center gap-2 w-full'>
//           <label>
//             <img src={image ? URL.createObjectURL(image) : assets.upload_icon}
//             alt="" className='h-14 rounded cursor-pointer'/>
//             <input type="file" id="car-image" accept="image/*" hidden onChange={e=> setImage(e.target.files[0])}/>

//           </label>
//           <p className='text-sm text-gray-500'>Upload a picture of your car</p>
//         </div>

//         {/* car brand and model */}
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//           <div className='flex flex-col w-full'>
//             <label>Brand</label>
//             <input type="text" placeholder="e.g. BMW,mercedes, Audi..."  required className='px-3 py-2 mt-1 
//             border border-borderColor rounded-md outline-none' 
//             value={car.brand} onChange={e=>setCar({...car, brand:e.target.value})}/>
//           </div>

//            <div className='flex flex-col w-full'>
//             <label>Model</label>
//             <input type="text" placeholder="e.g. X5,E-Class,M4...."  required className='px-3 py-2 mt-1 
//             border border-borderColor rounded-md outline-none' 
//             value={car.model} onChange={e=>setCar({...car, model:e.target.value})}/>
//           </div>
         
//         </div>

//         {/* car year , price and category */}

//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
//           <div className='flex flex-col w-full'>
//             <label>Year</label>
//             <input type="number" placeholder="2025"  required className='px-3 py-2 mt-1 
//             border border-borderColor rounded-md outline-none' 
//             value={car.year} onChange={e=>setCar({...car, year:e.target.value})}/>
//           </div>

//           <div className='flex flex-col w-full'>
//             <label>Daily Price({currency})</label>
//             <input type="number" placeholder="100"  required className='px-3 py-2 mt-1 
//             border border-borderColor rounded-md outline-none' 
//             value={car.pricePerDay} onChange={e=>setCar({...car, pricePerDay:e.target.value})}/>
//           </div>

//           <div className='flex flex-col w-full'>
//             <label>Category</label>
//             <select onChange={e=> setCar({...car, category:e.target.value})} value={car.category}
//             className='px-3 py-2 mt-1 border borderColor rounded-md outline-none'>
//               <option value=" ">select a Category</option>
//               <option value="sedan">sedan</option>
//               <option value="suv">suv</option>
//               <option value="van">van</option>
//             </select> 
//           </div>
//         </div>


//         {/* car transmission ,fuel type, seating capacity */}

//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
//            <div className='flex flex-col w-full'>
//             <label>Transmission</label>
//             <select onChange={e=> setCar({...car, transmission:e.target.value})} value={car.transmission}
//             className='px-3 py-2 mt-1 border borderColor rounded-md outline-none'>
//               <option value=" ">select a transmission</option>
//               <option value="automati">automatic</option>
//               <option value="manual">manual</option>
//               <option value="semi-automatic">semi-automatic</option>
//             </select> 
//            </div>

//             <div className='flex flex-col w-full'>
//               <label>Fuel type</label>
//               <select onChange={e=> setCar({...car, fuel_type:e.target.value})} value={car.fuel_type}
//               className='px-3 py-2 mt-1 border borderColor rounded-md outline-none'>
//                 <option value=" ">select a fuel type</option>
//                 <option value="Gas">Gas</option>
//                 <option value="Diesel">Diesel</option>
//                 <option value="Petrol">Petrol</option>
//               </select> 
//              </div>

//             <div className='flex flex-col w-full'>
//              <label>Seating Capacity</label>
//              <input type="number" placeholder="2"  required className='px-3 py-2 mt-1 
//              border border-borderColor rounded-md outline-none' 
//              value={car.seating_capacity} onChange={e=>setCar({...car, seating_capacity:e.target.value})}/>
//             </div>
//         </div>

//         {/* car location */}

//         <div className='flex flex-col w-full'>
//           <label>Location</label>
//               <select onChange={e=> setCar({...car, location:e.target.value})} value={car.location}
//               className='px-3 py-2 mt-1 border borderColor rounded-md outline-none'>
//                 <option value=" ">select a Location</option>
//                 <option value="Kolkata">Kolata</option>
//                 <option value="Ranchi">Ranchi</option>
//                 <option value="Patna">Patna</option>
//                 <option value="Delhi">Delhi</option>
//               </select>
//         </div>

//         {/* car description */}

//         <div className='flex flex-col w-full'>
//             <label>Discription</label>
//             <textarea rows={5} placeholder="e.g. a luxurious suv with a spacious interior and a powerful enginge ."  required className='px-3 py-2 mt-1 
//             border border-borderColor rounded-md outline-none' 
//             value={car.description} onChange={e=>setCar({...car, discripotion:e.target.value})}></textarea>
//         </div>

//         <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-black text-white rounded-md font-medium w-max cursor-pointer'>
//           <img src={assets.tick_icon} alt="" />
//           List your Car
//         </button>


//       </form>

//     </div>
//   )
// }

// export default Addcar


// 




import React, { useState } from 'react';
import Title from '../../components/Owner/Title';
import { assets } from '../../assets/assets';
import '../../style/Addcar.css';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Addcar = () => {
  const {axios, currency } = useAppContext()
  

  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: '',
    pricePerDay: '',
    category: '',
    transmission: '',
    fuel_type: '',
    seating_capacity: '',
    location: '',
    description: '',
  });

  const [isLoading, setIsLoading] = useState(false)
  const onSubmitHander =async (e) =>{
    e.preventDefault()
    if(isLoading) return null

    setIsLoading(true)
    try {
      const formData = new FormData()
    //   if (!image) { //this
    //  toast.error("Please upload an image of the car");
    //  setIsLoading(false);
    //   return;}
      formData.append("image", image)
      // formData.append("fileName", image.name); //this
      formData.append("carData", JSON.stringify(car))

      const {data} = await axios.post('/api/owner/add-car', formData)

      if(data.success){
        toast.success(data.message)
        setImage(null)
        setCar({
        brand:'',
        model:'',
        year:'',
        pricePerDay:'',
        category:'',
        transmission:'',
        fuel_type:'',
        seating_capacity:'',
        location:'',
        description:'',
        })
      }else{
        toast.error(data.message)
      }
       
    } catch (error) {
      toast.error(error.message)
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <div className="container py-4">
      <Title 
        title="Add New Vehicals" 
        subtitle="Fill in details to list a new car for booking, including pricing, availability, and car specifications." 
      />

      <form onSubmit={onSubmitHander} className="car-form mt-4">
        {/* Image Upload */}
        <div className="d-flex align-items-center mb-3">
          <label className="me-3 image-label">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt=""
              className="img-thumbnail upload-img"
            />
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <small className="text-muted">Upload a picture of your Vehical</small>
        </div>

        {/* Brand & Model */}
        <div className="row g-3">
          <div className="col-md-6">
            <label>Brand</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Hero, Bazaz..."
              value={car.brand}
              required
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
            />
          </div>

          <div className="col-md-6">
            <label>Model</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. spender, passionpro..."
              value={car.model}
              required
              onChange={(e) => setCar({ ...car, model: e.target.value })}
            />
          </div>
        </div>

        {/* Year, Price, Category */}
        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <label>Year</label>
            <input
              type="number"
              className="form-control"
              placeholder="2025"
              value={car.year}
              required
              onChange={(e) => setCar({ ...car, year: e.target.value })}
            />
          </div>

          <div className="col-md-4">
            <label>Daily Price ({currency})</label>
            <input
              type="number"
              className="form-control"
              placeholder="100"
              value={car.pricePerDay}
              required
              onChange={(e) => setCar({ ...car, pricePerDay: e.target.value })}
            />
          </div>

          <div className="col-md-4">
            <label>Category</label>
            <select
              className="form-select"
              value={car.category}
              onChange={(e) => setCar({ ...car, category: e.target.value })}
              required
            >
              <option value="">Select a Category</option>
              <option value="sedan">Sports</option>
              <option value="suv">Super</option>
              <option value="van">Comuter</option>
            </select>
          </div>
        </div>

        {/* Transmission, Fuel, Seating */}
        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <label>Transmission</label>
            <select
              className="form-select"
              value={car.transmission}
              onChange={(e) => setCar({ ...car, transmission: e.target.value })}
              required
            >
              <option value="">Select transmission</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
              <option value="semi-automatic">Semi-Automatic</option>
            </select>
          </div>

          <div className="col-md-4">
            <label>Fuel Type</label>
            <select
              className="form-select"
              value={car.fuel_type}
              onChange={(e) => setCar({ ...car, fuel_type: e.target.value })}
              required
            >
              <option value="">Select fuel type</option>
              <option value="Gas">CNG</option>
              <option value="Diesel">Electric</option>
              <option value="Petrol">Petrol</option>
            </select>
          </div>

          <div className="col-md-4">
            <label>Seating Capacity</label>
            <input
              type="number"
              className="form-control"
              placeholder="2"
              value={car.seating_capacity}
              required
              onChange={(e) => setCar({ ...car, seating_capacity: e.target.value })}
            />
          </div>
        </div>

        {/* Location */}
        <div className="mt-3">
          <label>Location</label>
          <select
            className="form-select"
            value={car.location}
            onChange={(e) => setCar({ ...car, location: e.target.value })}
            required
          >
            <option value="">Select a Location</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Ranchi">Bengaluru</option>
            <option value="Delhi">Delhi</option>
            <option value="Delhi">Dehradun</option>
            <option value="Delhi">Goa</option>
            <option value="Delhi">Gurugram</option>
            <option value="Delhi">Haridwar</option>
            <option value="Delhi">Hyderabad</option>
            <option value="Delhi">Jaipur</option>
            <option value="Delhi">Lucknow</option>
            <option value="Delhi">Noida</option>
            <option value="Patna">Patna</option>
            <option value="Delhi">Rishikesh</option>
            <option value="Delhi">Shimla</option>
            <option value="Delhi">Vadodara</option>
            <option value="Delhi">Manali</option>
            <option value="Delhi">Faridabad</option>
            <option value="Delhi">Ghaziabad</option>
          </select>
        </div>

        {/* Description */}
        <div className="mt-3">
          <label>Description</label>
          <textarea
            rows="4"
            className="form-control"
            placeholder="e.g. A luxurious Sportsbike with  powerful engine."
            value={car.description}
            required
            onChange={(e) => setCar({ ...car, description: e.target.value })}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-dark mt-4 d-flex align-items-center gap-2">
          <img src={assets.tick_icon} alt="" height="20" />
          {isLoading ? 'Listing...' : 'List your Vehicals'}
        </button>
      </form>
    </div>
  );
};

export default Addcar;


