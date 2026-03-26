// import React from "react";
// import "./adminnavbar.css";
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import LanguageIcon from '@mui/icons-material/Language';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
// import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
// import { DarkModeContext } from "../../context/darkModeContext";
// import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
// import { useContext } from "react";
// const Navbar = ()=>{

//      const { darkMode, dispatch } = useContext(DarkModeContext);
//     return(
//         <div className="navbar">
//             <div className="wrapper">
//                 <div className="search">
//                  <input type="text" placeholder="Search...."/>
//                   <SearchOutlinedIcon className="icon"/>
//                 </div>
//                 <div className="items">
//                     <div className="item">
//                      <LanguageIcon className="icon"/>
//                     English
//                     </div>
//                     <div className="item" title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
//                     {darkMode ? (
//                       <LightModeOutlinedIcon
//                        className="icon"
//                         onClick={() => dispatch({ type: "TOGGLE" })}
//                       />
//                     ) : (
//                       <DarkModeOutlinedIcon
//                         className="icon"
//                         onClick={() => dispatch({ type: "TOGGLE" })}
//                      />
//                     )}
//                   </div>
//                     <div className="item">
//                      <FullscreenOutlinedIcon className="icon"/>
                     
//                     </div>
//                     <div className="item">
//                      <NotificationsNoneOutlinedIcon className="icon"/>
//                      <div className="counter">1</div>
//                     </div>
//                     <div className="item">
//                      <ChatBubbleOutlineOutlinedIcon className="icon"/>
//                      <div className="counter">2</div>
//                     </div>
//                     <div className="item">
//                      <ViewListOutlinedIcon className="icon"/>
                     
//                     </div>
//                     <div className="item">
//                      <img
//                      src="https://www.pexels.com/photo/blue-bicycle-against-vibrant-orange-wall-33209986/" 
//                     alt=""
//                     className="avatar"/>
//                     </div>
                    
//                 </div>
//             </div>

//         </div>
//     )
// }
// export default Navbar


import React from "react";
import "./adminnavbar.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useContext } from "react";
const Navbar = ()=>{

     const { darkMode, dispatch } = useContext(DarkModeContext);
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                 <input type="text" placeholder="Search...."/>
                  <SearchOutlinedIcon className="icon"/>
                </div>
                <div className="items">
                    <div className="item">
                     <LanguageIcon className="icon"/>
                    English
                    </div>
                    <div className="item" title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
                    {darkMode ? (
                      <LightModeOutlinedIcon
                       className="icon"
                        onClick={() => dispatch({ type: "TOGGLE" })}
                      />
                    ) : (
                      <DarkModeOutlinedIcon
                        className="icon"
                        onClick={() => dispatch({ type: "TOGGLE" })}
                     />
                    )}
                  </div>
                    <div className="item">
                     <FullscreenOutlinedIcon className="icon"/>
                     
                    </div>
                    <div className="item">
                     <NotificationsNoneOutlinedIcon className="icon"/>
                     <div className="counter">1</div>
                    </div>
                    <div className="item">
                     <ChatBubbleOutlineOutlinedIcon className="icon"/>
                     <div className="counter">2</div>
                    </div>
                    <div className="item">
                     <ViewListOutlinedIcon className="icon"/>
                     
                    </div>
                    <div className="item">
                     <img
                     src="https://www.pexels.com/photo/blue-bicycle-against-vibrant-orange-wall-33209986/" 
                    alt=""
                    className="avatar"/>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
export default Navbar