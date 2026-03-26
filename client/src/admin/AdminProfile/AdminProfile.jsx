

import React from "react";
import "./Adminprofile.css"
import Sidebar from "../../components/SidebarAdmin/AdminSidebar";
import Navbar from "../../components/NavbarAdmin/AdminNavbar";





const Profile = () => {
    return (
        <div className="profile">
             <Sidebar/>
          <div className="profilecontainer">
            <Navbar/>
                <div className="admin-profile-container">
            
                {/* <header className="admin-profile-header">
            
                    <h2>Admin Profile</h2>
                    <p>Manage your account details and security settings.</p>
                 </header> */}

                 <div className="profile-card">
                    <div className="profile-photo-section">
                         <img
                             src="https://via.placeholder.com/150" // Replace with admin's profile photo URL
                             alt="Admin Profile"
                             className="profile-photo"
                         />
                        <h3>Bristy Samanta</h3>
                         <p>System Administrator</p>
                     </div>

                    <div className="profile-details-section">
                         <div className="detail-item">
                              <h4>Email:</h4>
                             <p>john.doe@carbookings.com</p>
                        </div>
                        <div className="detail-item">
                             <h4>Phone:</h4>
                             <p>+1 (555) 123-4567</p>
                         </div>
                         <div className="detail-item">
                            <h4>Joined:</h4>
                            <p>Jan 1, 2023</p>
                        </div>
                         <div className="detail-item">
                            <h4>Location:</h4>
                             <p>New York, USA</p>
                      </div>
                    </div>

                    <div className="profile-actions-section">
                        <button className="edit-button">Edit Profile</button>
                         <button className="change-password-button">Change Password</button>
                     </div>
                         </div>
                </div>
            </div>
        </div>
        
    );
};

export default Profile;