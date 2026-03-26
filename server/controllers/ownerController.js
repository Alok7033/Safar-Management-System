//  import imagekit from "../configs/imageKit.js";
//  import User from "../models/Users.js";
//  import fs from "fs"
//  import Car from "../models/Bike.js";
//  import Booking from "../models/Booking.js";

//  // API to change role
//  export const changeRoleToOwner = async (req, res)=>{
//      try {
//          const {_id} = req.user;
//          await User.findByIdAndUpdate(_id, {role: "owner"})
//          res.json({success:true, message: "Now ypu can list cars"})
//      }catch(error){
//          console.log(error.message);
//          res.json({success:false, message: error.message})
//      }
//  }

//  // API to List Car

//  export const addCar = async (req,res)=>{
//      try {
//          const {_id}= req.user;
//          let car = JSON.parse(req.body.carData);
//          const imageFile = req.file;

//          const fileBuffer = fs.readFileSync(imageFile.path)
//          const response = await imagekit.upload({
//              file: fileBuffer,
//              fileName: imageFile.originalname,
//              folder:'/cars'
//          })

//          // optimizing through imagekit url transmission
//        var optimizedImageUrl = imagekit.url({
//      path : response.filePath,
//       transformation : [
//          {width: '1280'}, // width resizing
//          {quality: 'auto'}, //auto compression
//          {format: 'webp'}  //convert to modern format
//      ]
//  });
//  const image = optimizedImageUrl ;
//    await Car.create({...car, owner: _id, image, isAvailable: true})

//  res.json({success: true, message: "Car Added"})

//      } catch (error) {
//          console.log(error.message);
//          res.json({success: false, message: error.message})
//      }
//  }

//  // API to List Owner Bikes
//  export const getOwnerCars = async (req, res)=>{
//      try {
//          const { _id } = req.user;
//          const cars = await Car.find({owner: _id})
//          res.json({success: true, cars})
//      } catch (error) {
//          console.log(error.message);
//          res.json({success: false, message: error.message})
        
//      }
//  }

//  // API to Toggle Bike Availability
//  export const toggleCarAvailability = async (req, res)=>{
//       try {
//          const {_id} = req.user;
//          const {carId} = req.body
//          const car = await Car.findById(carId)
//          // checking is bike belongs to the user
//          if(car.owner.toString() !== _id.toString()){
//              return res.json({success: false, message: "Unauthorized"});
//          }
//          car.isAvaiiable = !car.isAvailable;
//          await car.save()
//          res.json({success: true, message: "Availability Toggled"})
//      } catch (error) {
//          console.log(error.message);
//          res.json({success: false, message: error.message})
        
//      }
//  }
//  //API to delete a bike
//  export const deletecar = async (req, res)=>{
//       try {
//          const {_id} = req.user;
//          const {carId} = req.body
//          const car = await Car.findById(carId)
       
//          // checking is bike belongs to the user
//          if(car.owner.toString() !== _id.toString()){
//              return res.json({success: false, message: "Unauthorized"});
//          }
//          car.owner== null ;
//          car.isAvaliable = false;

//          await car.save()
        
//          res.json({success: true, message: "Car Removed"})
//      } catch (error) {
//          console.log(error.message);
//          res.json({success: false, message: error.message})
        
//      }
//  }

//  // API to get Dashboard Data
//  export const getDashboardData = async (req, res)=>{
//      try {
//          const { _id, role} = req.user;

//          if(role !== 'owner'){
//              return res.json({ success: false, message: "Unauthorized"});

//          }
//          const cars = await Car.find({owner: _id})
//         const bookings = await Booking
//          .find({ owner: _id })
//          .populate('car')
//          .sort({ createdAt: -1 });


//          const pendingBookings = await Booking.find({owner: _id, status: "pending"})
//          const completedBookings = await Booking.find({owner: _id, status: "confirmed"})

//          // Calculate monthlyRevenue from booking whare status is confrimed
//          const monthlyRevenue = bookings.slice().filter(booking => booking.
//              status==='confirmed').reduce((acc,booking)=> acc+booking.price, 0)

//              const dashboardData = {
//                  totalCars: cars.length,
//                  totalBookings: bookings.length,
//                  pendingBookings: pendingBookings.length,
//                  completedBookings: completedBookings.length,
//                  recentBookings: bookings.slice(0,3),
//                  monthlyRevenue
//              }
//              res.json({ success: true, dashboardData});

//      } catch (error) {
//          console.log(error.message);
//          res.json({success: false, message: error.message})
        
//      }
//  }

//  // API to update user image

//  export const updateUserImage = async (req, res)=>{
//      try {
//          const {_id}= req.user;
//          const imageFile = req.file;

//          // upload image to imagekit
//          const fileBuffer = fs.readFileSync(imageFile.path)
//          const response =await imagekit.upload({
//              file: fileBuffer,
//              fileName: imageFile.originalname,
//              folder: '/users'

//          })

//          // optimize through imagekit URL transformation
//          var optimizedImageUrl = imagekit.url({
//          path : response.filePath,
//          transformation : [
//          {width: '400'}, // width resizing
//          {quality: 'auto'}, //auto compression
//          {format: 'webp'}  //convert to modern format
//      ]
//  });
//          const image = optimizedImageUrl;
//          await User.findByIdAndUpdate(_id, {image});
//          res.json({success: true, message: "Image Updated"})


//      } catch (error) {
//          console.log(error.message);
//          res.json({success: false, message: error.message})
//      }
//  }

 import imagekit from "../configs/imageKit.js";
 import User from "../models/Users.js";
 import fs from "fs";
 import Car from "../models/Bike.js";
 import Booking from "../models/Booking.js";

  //======================= CHANGE ROLE =======================
 export const changeRoleToOwner = async (req, res) => {
   try {
     const { _id } = req.user;
     await User.findByIdAndUpdate(_id, { role: "owner" });
     res.json({ success: true, message: "Now you can list cars" });
   } catch (error) {
     console.log(error.message);
     res.json({ success: false, message: error.message });
   }
 };

  //======================= ADD CAR =======================
 export const addCar = async (req, res) => {
   try {
     const { _id } = req.user;
     let car = JSON.parse(req.body.carData);
     const imageFile = req.file;

     const fileBuffer = fs.readFileSync(imageFile.path);
     const response = await imagekit.upload({
       file: fileBuffer,
       fileName: imageFile.originalname,
       folder: "/cars",
     });

     // Optimize through ImageKit URL
     const optimizedImageUrl = imagekit.url({
       path: response.filePath,
       transformation: [
         { width: "1280" },
         { quality: "auto" },
         { format: "webp" },
       ],
     });

     const image = optimizedImageUrl;

     await Car.create({
       ...car,
       owner: _id,
       image,
       isAvailable: true, // ✅ fixed key
     });

     res.json({ success: true, message: "Vehical Added" });
   } catch (error) {
     console.log(error.message);
     res.json({ success: false, message: error.message });
   }
 };

 // ======================= GET OWNER CARS =======================
 export const getOwnerCars = async (req, res) => {
   try {
     const { _id } = req.user;
     const cars = await Car.find({ owner: _id });
     res.json({ success: true, cars });
   } catch (error) {
     console.log(error.message);
     res.json({ success: false, message: error.message });
   }
 };

 // ======================= TOGGLE CAR AVAILABILITY =======================
 export const toggleCarAvailability = async (req, res) => {
   try {
     const { _id } = req.user;
     const { carId } = req.body;

     const car = await Car.findById(carId);
     if (!car) return res.json({ success: false, message: "Vehical not found" });

     if (car.owner.toString() !== _id.toString()) {
       return res.json({ success: false, message: "Unauthorized" });
     }

     car.isAvailable = !car.isAvailable; // ✅ fixed key
     await car.save();

     res.json({ success: true, message: "Availability Toggled" });
   } catch (error) {
     console.log(error.message);
     res.json({ success: false, message: error.message });
   }
 };

  //======================= DELETE CAR =======================
 export const deletecar = async (req, res) => {
   try {
     const { _id } = req.user;
     const { carId } = req.body;

     const car = await Car.findById(carId);
     if (!car) return res.json({ success: false, message: "Vehical not found" });

     if (car.owner.toString() !== _id.toString()) {
       return res.json({ success: false, message: "Unauthorized" });
     }

     // delete from DB instead of marking
     await car.deleteOne();

     res.json({ success: true, message: "Vehical Removed" });
   } catch (error) {
     console.log(error.message);
     res.json({ success: false, message: error.message });
   }
 };

  //======================= DASHBOARD DATA =======================
 export const getDashboardData = async (req, res) => {
   try {
     const { _id, role } = req.user;

     if (role !== "owner") {
       return res.json({ success: false, message: "Unauthorized" });
     }

     const cars = await Car.find({ owner: _id });
     const bookings = await Booking.find({ owner: _id })
       .populate("car")
       .sort({ createdAt: -1 });

     const pendingBookings = await Booking.find({
       owner: _id,
       status: "pending",
     });
     const completedBookings = await Booking.find({
       owner: _id,
       status: "confirmed",
     });

     const monthlyRevenue = bookings
       .filter((b) => b.status === "confirmed")
       .reduce((acc, b) => acc + b.price, 0);

     const dashboardData = {
       totalCars: cars.length,
       totalBookings: bookings.length,
       pendingBookings: pendingBookings.length,
       completedBookings: completedBookings.length,
       recentBookings: bookings.slice(0, 3),
       monthlyRevenue,
     };

     res.json({ success: true, dashboardData });
   } catch (error) {
     console.log(error.message);
     res.json({ success: false, message: error.message });
   }
 };

  //======================= UPDATE USER IMAGE =======================
 export const updateUserImage = async (req, res) => {
   try {
     const { _id } = req.user;
     const imageFile = req.file;

     const fileBuffer = fs.readFileSync(imageFile.path);
     const response = await imagekit.upload({
       file: fileBuffer,
       fileName: imageFile.originalname,
       folder: "/users",
     });

     const optimizedImageUrl = imagekit.url({
       path: response.filePath,
       transformation: [
         { width: "400" },
         { quality: "auto" },
         { format: "webp" },
       ],
     });

     const image = optimizedImageUrl;
     await User.findByIdAndUpdate(_id, { image });

     res.json({ success: true, message: "Image Updated" });
   } catch (error) {
     console.log(error.message);
     res.json({ success: false, message: error.message });
   }
 };

 //======================= Reset USER IMAGE =======================
 export const resetUserImage = async (req, res) => {
  try {
    const { _id } = req.user;

    // Set to default placeholder image (can be local or hosted)
    const defaultImage =
      "https://via.placeholder.com/400x400.png?text=Profile"; 

    await User.findByIdAndUpdate(_id, { image: defaultImage });

    res.json({ success: true, message: "Profile image reset to default" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
