import React from "react";
import "./Adminlist.css";
import Sidebar from "../../components/SidebarAdmin/AdminSidebar";
import Navbar from "../../components/NavbarAdmin/AdminNavbar";

import Datatable from "../../components/DatatableAdmin/AdminDatatable";
const List = ()=>{
    return(
        <div className="list">
        <Sidebar/>
        <div className="listContainer">
         <Navbar/>
         <Datatable/> 
        </div>
 
        </div>
    )
}
export default List