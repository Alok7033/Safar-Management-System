
// export default Single

import React from "react";
import "./Adminsingle.css"; 
import Sidebar from "../../components/SidebarAdmin/AdminSidebar";
import Navbar from "../../components/NavbarAdmin/AdminNavbar";
import Chart from "../../components/ChartAdmin/AdminChart";
import List from "../../components/TableAdmin/AdminTable";

const Single = () => {
    return(
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                       <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg" alt=""
                            className="itemImg"/>
                             <div className="details">
                            <h1 className="itemTitle">Alok Kumar</h1>
                            <div className="detailItem">
                                 <span className="itemKey">Email:</span>
                                 <span className="itemValue">jha09752@gmail.com</span>
                              </div>
                              <div className="detailItem">
                                 <span className="itemKey">Phone:</span>
                                 <span className="itemValue">918434199006</span>
                              </div>
                              <div className="detailItem">
                                 <span className="itemKey">Address:</span>
                                 <span className="itemValue">jha09752@gmail.com</span>
                              </div>
                              <div className="detailItem">
                                 <span className="itemKey">Email:</span>
                                 <span className="itemValue">Bihar, Patna</span>
                              </div>
                              <div className="detailItem">
                                 <span className="itemKey">Country:</span>
                                 <span className="itemValue">India</span>
                              </div>
                              
                            </div>
                        </div>
                        
                    </div>
                    <div className="right">
                      <Chart aspect={3/1} title="User Spending (Last 7 Months)"/>  
                    </div>
                </div>
                <div className="bottom">
                <h1 className="title">Last Transctions</h1>
                    <List/>
                </div>
            </div>
        </div>
    )
}
export default Single