
import React, { useContext } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loc from './components/Loc';
import ClientLogin from './components/Login'; // Renamed to avoid conflict
import HomePage from './pages/Home'; // Renamed to avoid conflict
import Cardetails from './pages/Cardetails';
import Cars from './pages/Cars';
import Mybooking from './pages/Mybooking';
import BlogPage from './pages/Vlog';

import ResetPassword from './pages/ResetPassword';
import VerifyEmail from './pages/VerifyEmail';


import OwnerLayout from './pages/Owner/Layout';
import Dashboard from './pages/Owner/Dashboard';
import Addcar from './pages/Owner/Addcar';
import ManageCars from './pages/Owner/ManageCars';
import ManageBookings from './pages/Owner/ManageBookings';
import PaymentPage from './pages/Owner/PaymentPage';

import AdminHome from './admin/adminhome/AdminHome';
import AdminLogin from './admin/adminlogin/AdminLogin';
import AdminList from './admin/adminlist/AdminList';
import AdminNew from './admin/adminnew/AdminNew';
import AdminSingle from './admin/adminsingle/AdminSingle';
import AdminProfile from './admin/AdminProfile/AdminProfile';

import { productInputs, userInputs } from './formSource';
import { useAppContext } from './context/AppContext';
import { DarkModeContext } from './context/darkModeContext';

import ChatbotComponent from './components/Chatbot/ChatbotComponent';


import './style/dark.css';
import './style/admindark.css';
import './index.css';

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  const {
    showLogin,
    showVerifyEmail,
    showResetPassword,
  } = useAppContext();

  const location = useLocation();
  const isOwnerPath = location.pathname.startsWith('/owner');
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Toaster />

      {/* Conditional Login Modal */}
      {/* {showLogin && !isAdminPath && <ClientLogin />} */}
    {showLogin && !isAdminPath && <ClientLogin />}
      {showLogin && isAdminPath && <AdminLogin />}
      {showVerifyEmail && <VerifyEmail />}
      {showResetPassword && <ResetPassword />}

      {/* Conditional Navbar/Footer for client routes */}
      {!isOwnerPath && !isAdminPath && <Navbar />}

      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/select-city" element={<Loc />} />
        <Route path="/car-details/:id" element={<Cardetails />} />
        <Route path="paymentpage" element={<PaymentPage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<Mybooking />} />
        <Route path="/blog" element={<BlogPage/>} />
        {/* <Route path="/login" element={<ClientLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> */}


        {/* Owner Routes */}
        <Route path="/owner" element={<OwnerLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<Addcar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
          {/* <Route path="paymentpage" element={<PaymentPage />} /> */}
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/adminlogin" element={<AdminLogin />} />
        <Route path="/admin/adminprofile" element={<AdminProfile />} />

        {/* Admin Users */}
        <Route path="/admin/adminusers" element={<AdminList />} />
        <Route path="/admin/adminusers/:userId" element={<AdminSingle />} />
        <Route
          path="/admin/adminusers/new"
          element={<AdminNew inputs={userInputs} title="Add New User" />}
        />
        <Route path="/admin/users" element={<Navigate to="/admin/adminusers" />} />

        {/* Admin Products */}
        <Route path="/admin/products" element={<AdminList />} />
        <Route path="/admin/products/:productsId" element={<AdminSingle />} />
        <Route
          path="/admin/products/new"
          element={<AdminNew inputs={productInputs} title="Add New Product" />}
        />
      </Routes>


      {!isOwnerPath && !isAdminPath && <ChatbotComponent />}


      {/* Footer only for client routes */}
      {!isOwnerPath && !isAdminPath && <Footer />}
    </div>
  );
};

export default App;