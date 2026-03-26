

import React from "react";
import AdminSidebar from "../../components/SidebarAdmin/AdminSidebar";
import AdminNavbar from "../../components/NavbarAdmin/AdminNavbar";
import AdminWidget from "../../components/WidgetAdmin/AdminWidget";
import AdminFeatured from "../../components/FeaturedAdmin/AdminFeatured";
// import "./Home.css";
import "./Adminhome.css"
import AdminChart from "../../components/ChartAdmin/AdminChart";

// import Table from "@mui/material/Table";
import AdminList from "../../components/TableAdmin/AdminTable";

const Home = ()=>{
    return(
        <div className="home">
        <AdminSidebar/>
        <div className="homeContainer">
        <AdminNavbar/>  
          <div className="widgets">
            <AdminWidget type="user"/>
            <AdminWidget type="order"/>
            <AdminWidget type="earning"/>
            <AdminWidget type="balance"/>
          </div>
          <div className="charts">
            <AdminFeatured/>
            <AdminChart title="Last 7 Months (Revenue)" aspect={2/1}/>

          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transctions
            </div>
            <AdminList/> 
            {/* i don know */}
          </div>
        </div>
        </div>

        

    )
}
export default Home