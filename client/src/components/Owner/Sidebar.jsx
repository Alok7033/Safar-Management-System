// import React, { useState } from 'react'
// import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets'
// import { NavLink, useLocation } from 'react-router-dom';
// import dashboardIcon from '../../assets/dashboardicon.svg';
// import dashboardIconColored from '../../assets/dashboardiconcolored.svg';
// import addIcon from '../../assets/addicon.svg';
// import addIconColored from '../../assets/addiconcolored.svg';
// import carIcon from '../../assets/caricon.svg';
// import carIconColored from '../../assets/cariconcolored.svg';
// import listIcon from '../../assets/listicon.svg';
// import listIconColored from '../../assets/listiconcolored.svg';
// import PaymentPage from '../../pages/Owner/PaymentPage';






// const Sidebar = () => {

//    const ownerMenuLinks = [
//     { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
//     { name: "Add car", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
//     { name: "Manage Cars", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
//     { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
//      { name: "PaymentPage", path: "/owner/PaymentPage", icon: dashboardIcon, coloredIcon: dashboardIconColored },
// ];


//     const user = dummyUserData;
//     const location = useLocation()
//     const [image,setImage]=useState('')

//     const updateImage=async () =>{
//         user.image=URL.createObjectURL(image)
//         setImage('')
//     }

//       return (
//         <div className='relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm'>
          
//           <div className='group relative'>
//             <label htmlFor="image">
//                 <img src={image ? URL.createObjectURL(image) : user?.image || 
//                 "https://www.bing.com/images/search?q=image&id=BC6470C60B7A8615DA7155B539C4A122275DF649&FORM=IQFRBA"}
//                 alt="" className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto'/>
//                 <input type="file" id='image' accept="image/*" hidden onChange={e=>
//                 setImage(e.target.files[0])}/>

//                 <div className='absolute hidden top-0 left-0 bottom-0
//                 bg-black/10 rounded-full group-hover:flex items-centr justify-center cursor-pointer'>
//                     <img src={assets.edit_icon} alt="" />
//                 </div>

//             </label>
//           </div>

//           {image && (
//             <button className='absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer'> 
//              Save
//              <img src={assets.check_icon} width={13} alt="" onClick={updateImage}/>
//             </button>
//           )}
//           <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>

//         <div className='w-full'>
//           {ownerMenuLinks.map((link,index)=>(
//             <NavLink key={index} to={link.path} className={`relative flex items-center
//             gap-2 w-full py-3 pl-4 first:mt-6 ${link.path===location.pathname ? 'bg-primary/10 text-primary' : 'text-gray-600'}`}>
//                 <img src={link.path === location.pathname ? link.coloredIcon : link.icon}
//                 alt="car icon" />
//                 <span className='max-md:hidden'>{link.name}</span>
//                 <div className={` ${link.path === location.pathname && 'bg-primary'}
//                  w-1.5 h-8 rounded-1 right-0 absolute`}></div>
//             </NavLink>
//           ))}
           
//         </div>
        
//         </div>
//   )
// }

// export default Sidebar


// import React, { useState } from 'react';
// import { assets, dummyUserData } from '../../assets/assets';
// import { NavLink, useLocation } from 'react-router-dom';
// import dashboardIcon from '../../assets/dashboardicon.svg';
// import dashboardIconColored from '../../assets/dashboardiconcolored.svg';
// import addIcon from '../../assets/addicon.svg';
// import addIconColored from '../../assets/addiconcolored.svg';
// import carIcon from '../../assets/caricon.svg';
// import carIconColored from '../../assets/cariconcolored.svg';
// import listIcon from '../../assets/listicon.svg';
// import listIconColored from '../../assets/listiconcolored.svg';

// import '../../style/Sidebar.css'; // This is regular CSS

// const Sidebar = () => {
//   const ownerMenuLinks = [
//     { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
//     { name: "Add car", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
//     { name: "Manage Cars", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
//     { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
//     { name: "PaymentPage", path: "/owner/PaymentPage", icon: dashboardIcon, coloredIcon: dashboardIconColored },
//   ];

//   const user = dummyUserData;
//   const location = useLocation();
//   const [image, setImage] = useState('');

//   const updateImage = async () => {
//     user.image = URL.createObjectURL(image);
//     setImage('');
//   };

//   return (
//     <div className="sidebar">
//       <div className="profileContainer group">
//         <label htmlFor="image">
//           <img
//             src={image ? URL.createObjectURL(image) : user?.image || "https://via.placeholder.com/150"}
//             alt=""
//             className="profileImage"
//           />
//           <input
//             type="file"
//             id="image"
//             accept="image/*"
//             hidden
//             onChange={(e) => setImage(e.target.files[0])}
//           />
//           <div className="editOverlay">
//             <img src={assets.edit_icon} alt="" />
//           </div>
//         </label>
//       </div>

//       {image && (
//         <button className="saveButton" onClick={updateImage}>
//           Save
//           <img src={assets.check_icon} width={13} alt="" />
//         </button>
//       )}

//       <p className="userName max-md:hidden">{user?.name}</p>

//       <div className="navLinks">
//         {ownerMenuLinks.map((link, index) => {
//           const isActive = link.path === location.pathname;
//           return (
//             <NavLink
//               key={index}
//               to={link.path}
//               className={`navLink ${isActive ? 'navLinkActive' : ''}`}
//             >
//               <img src={isActive ? link.coloredIcon : link.icon} alt="icon" />
//               <span className="max-md:hidden">{link.name}</span>
//               <div className={`navDot ${isActive ? 'navDotActive' : ''}`}></div>
//             </NavLink>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



// // // // // // import React, { useState } from 'react';
// // // // // //  import {  assets,ownerMenuLinks } from '../../assets/assets';
// // // // // //  import { NavLink, useLocation } from 'react-router-dom';
// // // // // //  import '../../style/Sidebar.css';
// // // // // //  import { useAppContext } from '../../context/AppContext';
// // // // // //  import toast from 'react-hot-toast';

// // // // // //   import dashboardIcon from '../../assets/dashboardicon.svg';
// // // // // //   import dashboardIconColored from '../../assets/dashboardiconcolored.svg';
// // // // // //   import addIcon from '../../assets/addicon.svg';
// // // // // //   import addIconColored from '../../assets/addiconcolored.svg';
// // // // // //   import carIcon from '../../assets/caricon.svg';
// // // // // //   import carIconColored from '../../assets/cariconcolored.svg';
// // // // // //   import listIcon from '../../assets/listicon.svg';
// // // // // //   import listIconColored from '../../assets/listiconcolored.svg';

// // // // // //  const Sidebar = () => {
// // // // // //    const menuLinks = [
// // // // // //      { name: 'Dashboard', path: '/owner', icon: dashboardIcon, coloredIcon: dashboardIconColored },
// // // // // //      { name: 'Add car', path: '/owner/add-car', icon: addIcon, coloredIcon: addIconColored },
// // // // // //      { name: 'Manage Cars', path: '/owner/manage-cars', icon: carIcon, coloredIcon: carIconColored },
// // // // // //      { name: 'Manage Bookings', path: '/owner/manage-bookings', icon: listIcon, coloredIcon: listIconColored },
// // // // // //      { name: 'PaymentPage', path: '/owner/PaymentPage', icon: dashboardIcon, coloredIcon: dashboardIconColored },
// // // // // //    ];

// // // // // //    const {user,axios,fetchUser} =useAppContext()
// // // // // //    const location = useLocation();
// // // // // //    const [image, setImage] = useState('');

// // // // // //    const updateImage = async() => {
// // // // // //     try {
// // // // // //      const formData = new FormData()
// // // // // //      formData.append("image",image)

// // // // // //      const {data} = await axios.post('/api/owner/update-image',
// // // // // //        formData)

// // // // // //        if(data.success){
// // // // // //          fetchUser()
// // // // // //          toast.success(data.message)
// // // // // //          setImage('')
// // // // // //        }else{
// // // // // //          toast.error(data.message)
// // // // // //        }
    
// // // // // //     } catch (error) {
// // // // // //      toast.error(error.message)
// // // // // //     }
// // // // // //    };

// // // // // //    return (
// // // // // //      <div className="sidebar-wrapper d-flex flex-column align-items-center">
// // // // // //        {/* Profile image */}
// // // // // //        <div className="position-relative profile-container mt-3">
// // // // // //          <label htmlFor="image" className="position-relative d-block">
// // // // // //            <img
// // // // // //              src={
// // // // // //                image
// // // // // //                  ? URL.createObjectURL(image)
// // // // // //                  : user?.image ||
// // // // // //                    'https://www.bing.com/images/search?q=image&id=BC6470C60B7A8615DA7155B539C4A122275DF649&FORM=IQFRBA'
// // // // // //              }
// // // // // //              alt="Profile"
// // // // // //              className="rounded-circle profile-img"
// // // // // //            />
// // // // // //            <input
// // // // // //              type="file"
// // // // // //              id="image"
// // // // // //              accept="image/*"
// // // // // //              hidden
// // // // // //              onChange={(e) => setImage(e.target.files[0])}
// // // // // //            />
// // // // // //            <div className="edit-overlay position-absolute top-0 start-0 w-100 h-100 d-none align-items-center justify-content-center">
// // // // // //              <img src={assets.edit_icon} alt="Edit" />
// // // // // //            </div>
// // // // // //          </label>
// // // // // //        </div>

// // // // // //        {/* Save Button */}
// // // // // //        {image && (
// // // // // //          <button
// // // // // //            className="btn btn-sm btn-light d-flex align-items-center gap-1 position-absolute top-0 end-0 m-2"
// // // // // //            onClick={updateImage}>
// // // // // //            Save
// // // // // //            <img src={assets.check_icon} width={13} alt="Save" />
// // // // // //          </button>
// // // // // //        )}

// // // // // //        <p className="mt-2 sidebar-name d-none d-md-block fw-semibold">{user?.name}</p>

// // // // // //        {/* Menu */}
// // // // // //        <div className="w-100 mt-4">
// // // // // //          {menuLinks.map((link, index) => {
// // // // // //            const isActive = location.pathname === link.path;
// // // // // //            return (
// // // // // //              <NavLink
// // // // // //                key={index}
// // // // // //                to={link.path}
// // // // // //                className={`sidebar-link d-flex align-items-center gap-2 px-3 py-2 position-relative ${
// // // // // //                  isActive ? 'active-link' : ''
// // // // // //                }`}
// // // // // //              >
// // // // // //                <img
// // // // // //                  src={isActive ? link.coloredIcon : link.icon}
// // // // // //                  alt={`${link.name} icon`}
// // // // // //                  className="sidebar-icon"
// // // // // //                />
// // // // // //                <span className="d-none d-md-inline">{link.name}</span>
// // // // // //                {isActive && <div className="active-indicator position-absolute end-0"></div>}
// // // // // //              </NavLink>
// // // // // //            );
// // // // // //          })}
// // // // // //        </div>
// // // // // //      </div>
// // // // // //    );
// // // // // //  };

// // // // // //  export default Sidebar;

// // import React, { useState } from 'react';
// // import { assets } from '../../assets/assets';
// // import { NavLink, useLocation } from 'react-router-dom';
// // import '../../style/Sidebar.css';
// // import { useAppContext } from '../../context/AppContext';
// // import toast from 'react-hot-toast';

 //icons
// // import dashboardIcon from '../../assets/dashboardicon.svg';
// // import dashboardIconColored from '../../assets/dashboardiconcolored.svg';
// // import addIcon from '../../assets/addicon.svg';
// // import addIconColored from '../../assets/addiconcolored.svg';
// // import carIcon from '../../assets/caricon.svg';
// // import carIconColored from '../../assets/cariconcolored.svg';
// // import listIcon from '../../assets/listicon.svg';
// // import listIconColored from '../../assets/listiconcolored.svg';

// // const Sidebar = () => {
// //   const menuLinks = [
// //     { name: 'Dashboard', path: '/owner', icon: dashboardIcon, coloredIcon: dashboardIconColored },
// //     { name: 'Add car', path: '/owner/add-car', icon: addIcon, coloredIcon: addIconColored },
// //     { name: 'Manage Cars', path: '/owner/manage-cars', icon: carIcon, coloredIcon: carIconColored },
// //     { name: 'Manage Bookings', path: '/owner/manage-bookings', icon: listIcon, coloredIcon: listIconColored },
// //     { name: 'PaymentPage', path: '/owner/PaymentPage', icon: dashboardIcon, coloredIcon: dashboardIconColored },
// //   ];

// //   const { user, axios, fetchUser } = useAppContext();
// //   const location = useLocation();
// //   const [image, setImage] = useState('');

// //   // update profile image
// //   const updateImage = async () => {
// //     try {
// //       const formData = new FormData();
// //       formData.append("image", image);

// //       const { data } = await axios.post('/api/owner/update-image', formData);

// //       if (data.success) {
// //         fetchUser();
// //         toast.success(data.message);
// //         setImage('');
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   // reset profile image
// //   const resetImage = async () => {
// //     try {
// //       const { data } = await axios.post('/api/owner/reset-image');
// //       if (data.success) {
// //         fetchUser();
// //         toast.success(data.message);
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   return (
// //     <div className="sidebar-wrapper d-flex flex-column align-items-center">
// //       {/* Profile image */}
// //       <div className="position-relative profile-container mt-3">
// //         <label htmlFor="image" className="position-relative d-block">
// //           <img
// //             src={
// //               image
// //                 ? URL.createObjectURL(image)
// //                 : user?.image ||
// //                   'https://via.placeholder.com/150?text=Profile'
// //             }
// //             alt="Profile"
// //             className="rounded-circle profile-img"
// //           />
// //           <input
// //             type="file"
// //             id="image"
// //             accept="image/*"
// //             hidden
// //             onChange={(e) => setImage(e.target.files[0])}
// //           />
// //           <div className="edit-overlay position-absolute top-0 start-0 w-100 h-100 d-none align-items-center justify-content-center">
// //             <img src={assets.edit_icon} alt="Edit" />
// //           </div>
// //         </label>

// //         {/* Save & Reset buttons */}
// //         {image && (
// //           <button
// //             className="btn btn-sm btn-light d-flex align-items-center gap-1 position-absolute top-0 end-0 m-2"
// //             onClick={updateImage}>
// //             Save
// //             <img src={assets.check_icon} width={13} alt="Save" />
// //           </button>
// //         )}
// //         {!image && user?.image && (
// //           <button
// //             className="btn btn-sm btn-danger d-flex align-items-center gap-1 position-absolute top-0 end-0 m-2"
// //             onClick={resetImage}>
// //             Reset
// //             <img src={assets.delete_icon} width={13} alt="Reset" />
// //           </button>
// //         )}
// //       </div>

// //       <p className="mt-2 sidebar-name d-none d-md-block fw-semibold">{user?.name}</p>

// //       {/* Menu */}
// //       <div className="w-100 mt-4">
// //         {menuLinks.map((link, index) => {
// //           const isActive = location.pathname === link.path;
// //           return (
// //             <NavLink
// //               key={index}
// //               to={link.path}
// //               className={`sidebar-link d-flex align-items-center gap-2 px-3 py-2 position-relative ${
// //                 isActive ? 'active-link' : ''
// //               }`}
// //             >
// //               <img
// //                 src={isActive ? link.coloredIcon : link.icon}
// //                 alt={`${link.name} icon`}
// //                 className="sidebar-icon"
// //               />
// //               <span className="d-none d-md-inline">{link.name}</span>
// //               {isActive && <div className="active-indicator position-absolute end-0"></div>}
// //             </NavLink>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;

import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { NavLink, useLocation } from 'react-router-dom';
import '../../style/Sidebar.css';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

import dashboardIcon from '../../assets/dashboardicon.svg';
import dashboardIconColored from '../../assets/dashboardiconcolored.svg';
import addIcon from '../../assets/addicon.svg';
import addIconColored from '../../assets/addiconcolored.svg';
import carIcon from '../../assets/caricon.svg';
import carIconColored from '../../assets/cariconcolored.svg';
import listIcon from '../../assets/listicon.svg';
import listIconColored from '../../assets/listiconcolored.svg';

const Sidebar = () => {
  const menuLinks = [
    { name: 'Dashboard', path: '/owner', icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: 'Add Vehicals', path: '/owner/add-car', icon: addIcon, coloredIcon: addIconColored },
    { name: 'Manage Vehicals', path: '/owner/manage-cars', icon: carIcon, coloredIcon: carIconColored },
    { name: 'Manage Bookings', path: '/owner/manage-bookings', icon: listIcon, coloredIcon: listIconColored },
    
  ];

  const { user, axios, fetchUser } = useAppContext();
  const location = useLocation();
  const [image, setImage] = useState('');

  const updateImage = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);

      const { data } = await axios.post('/api/owner/update-image', formData);

      if (data.success) {
        fetchUser(); // get latest user info (with new image)
        toast.success(data.message);
        setImage('');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="sidebar-wrapper d-flex flex-column align-items-center">
      {/* Profile image */}
      <div className="position-relative profile-container mt-3">
        <label htmlFor="image" className="profile-label">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image ||
                  'https://cdn-icons-png.flaticon.com/512/149/149071.png'
            }
            alt="Profile"
            className="rounded-circle profile-img"
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
          {/* Hover pencil icon */}
          <div className="edit-overlay">
            <img src={assets.edit_icon} alt="Edit" />
          </div>
        </label>

        {/* Save Button only after selecting new file */}
        {image && (
          <button className="save-btn" onClick={updateImage}>
            <img src={assets.check_icon} alt="Save" />
          </button>
        )}
      </div>

      <p className="mt-2 sidebar-name d-none d-md-block fw-semibold">{user?.name}</p>

      {/* Menu */}
      <div className="w-100 mt-4">
        {menuLinks.map((link, index) => {
          const isActive = location.pathname === link.path;
          return (
            <NavLink
              key={index}
              to={link.path}
              className={`sidebar-link d-flex align-items-center gap-2 px-3 py-2 position-relative ${
                isActive ? 'active-link' : ''
              }`}
            >
              <img
                src={isActive ? link.coloredIcon : link.icon}
                alt={`${link.name} icon`}
                className="sidebar-icon"
              />
              <span className="d-none d-md-inline">{link.name}</span>
              {isActive && <div className="active-indicator position-absolute end-0"></div>}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

