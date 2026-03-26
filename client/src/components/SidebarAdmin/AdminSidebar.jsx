import React,{ useContext} from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import "./adminsidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import BikeScooterIcon from '@mui/icons-material/BikeScooter';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import QueryStatsTwoToneIcon from '@mui/icons-material/QueryStatsTwoTone';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';



const Sidebar = ()=>{
    const { dispatch } = useContext(DarkModeContext);
    
    return(
        <div className="sidebar" >
            <div className="top">
               <Link to="/admin" style={{textDecoration :"none"}} >
                 <span className="logo">Safar</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
            <ul>
              <p className="tittle">MAIN</p>
                <li>
                   <DashboardIcon className="icon"/>
                    <Link to="/admin" style={{textDecoration :"none"}} >
                    <span>Dashboard</span>
                    </Link>
                </li>
               <p className="tittle">LISTS</p>
               <Link to="/admin/users" style={{textDecoration :"none"}} >
                  <li>
                  <PersonOutlineOutlinedIcon className="icon"/>
                      <span>Users</span>
                  </li>
                </Link>
                <Link to="/admin/products" style={{textDecoration :"none"}} >
                    <li>
                   <TwoWheelerIcon className="icon"/>
                       <span>Products</span>
                   </li>
                </Link>
                <li>
                <BikeScooterIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                <DeliveryDiningOutlinedIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="tittle">USEFUL</p>
                <li>
                <QueryStatsTwoToneIcon className="icon"/>
                    <span>Status</span>
                </li>
                <li>
                <NotificationsNoneOutlinedIcon className="icon"/>
                    <span>Notification</span>
                </li>
                <p className="tittle">SERVICE</p>
                <li>
                <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <Link to="/admin/adminlogin" style={{textDecoration :"none"}} >
                <li>
                <PsychologyOutlinedIcon className="icon"/>
                
                    <span>Logs</span>
                </li>
                </Link>
                <li>
                <SettingsSuggestOutlinedIcon className="icon"/>
                    <span>Setting</span>
                </li>
                <p className="tittle">USER</p>
                 <Link to="/admin/adminprofile" style={{textDecoration :"none"}} >
                <li>
                <AccountCircleOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                </Link>
                <li>
                <ExitToAppOutlinedIcon className="icon"/>
                    <span>Logout</span>
                </li>

            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() =>dispatch({type: "LIGHT" })}></div>
            <div className="colorOption" onClick={() =>dispatch({type: "DARK" })}></div>
        </div>
        
        

        </div>
    )
}
export default Sidebar