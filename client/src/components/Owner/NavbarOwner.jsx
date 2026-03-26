// import React from 'react'
// import { assets, dummyUserData } from '../../assets/assets'
// import { Link } from 'react-router-dom';

// const NavbarOwner = () => {

//   const user =dummyUserData;


//   return (
//     <div className='flex items-center justify-between px-6 md:px-10 py-4
//     text-gray-500 border-b border-borderColor relative transition-all'>
//      <Link to='/'>
//       <img src={assets.logo} alt="" className="h-7"/>
//      </Link>
//      <p>Welcome, {user.name || "Owner" }</p>
      
//     </div>
//   )
// }

// export default NavbarOwner


// import React from 'react';
// import { assets, dummyUserData } from '../../assets/assets';
// import { Link } from 'react-router-dom';
// import '../../style/NavbarOwner.css'; // ✅ Import the CSS

// const NavbarOwner = () => {
//   const user = dummyUserData;

//   return (
//     <div className='navbar-owner'>
//       <Link to='/'>
//         <img src={assets.logo} alt="Logo" className="navbar-logo" />
//       </Link>
//       <p>Welcome, {user.name || "Owner"}</p>
//     </div>
//   );
// };

// export default NavbarOwner;



import React from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import '../../style/NavbarOwner.css';
import { useAppContext } from '../../context/AppContext';

const NavbarOwner = () => {
  const user = useAppContext()

  return (
    <nav className="navbar-owner d-flex justify-content-between align-items-center border-bottom px-3 px-md-4 py-3">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo-img" />
      </Link>
      <p className="mb-0 text-muted">Welcome   {user?.name || 'Owner'}</p>
    </nav>
  );
};

export default NavbarOwner;
