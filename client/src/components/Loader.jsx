// import React from 'react'

// const Loader = () => {
//   return (
//     <div className='flex justify-center items-center h-[80h]'>
//      <div className='animate-spin rounded-full h-14 w-14 border-4 border-gray-300 border-t-primary'>

//      </div>
      
//     </div>
//   )
// }

// export default Loader

import React from 'react';
import '../style/Loader.css'; // Adjust the path as needed

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-spinner"></div>
    </div>
  );
};

export default Loader;
