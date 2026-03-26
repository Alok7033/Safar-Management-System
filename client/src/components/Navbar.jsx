import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";
import "../style/Navbar.css";
import { useAppContext } from "../context/AppContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { motion } from "motion/react";

const Navbar = () => {
  const {
    setShowLogin,
    user,
    logout,
    isOwner,
    setIsOwner,
    changeRole,
    navigate,
  } = useAppContext();

  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { darkMode, dispatch } = useContext(DarkModeContext);

  // Persist owner role across refresh
  useEffect(() => {
    const storedRole = localStorage.getItem("isOwner");
    if (storedRole === "true") setIsOwner(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("isOwner", isOwner);
  }, [isOwner]);

  // Get initials (max 2 letters)
  const getInitials = (name, email) => {
    if (name && name.trim().length > 0) {
      const parts = name.trim().split(/\s+/);
      if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    if (email) return email[0].toUpperCase();
    return "?";
  };

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Vehicals", path: "/cars" },
    ...(user ? [{ name: "My Bookings", path: "/my-bookings" }] : []),
    { name: "Blog", path: "/blog" },
  ];

  return (
    <motion.div
      initial={{ y: -20, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar-wrapper"
    >
      <div
        className={`navbar-container ${
          location.pathname === "/" ? "bg-light" : ""
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={assets.logo}
            alt="logo"
            className="logo"
          />
        </Link>

        {/* Burger Icon */}
        <button
          className="menu-icon"
          aria-label="menu"
          onClick={() => setOpen(!open)}
        >
          <img
            src={open ? assets.close_icon : assets.menu_icon}
            alt="menu"
            className="menu-icon-img"
          />
        </button>

        {/* Menu Panel */}
        <div className={`menu-panel ${open ? "open" : ""}`}>
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="menu-link"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="header-container">
            {/* Search */}
            <div className="search-box">
              <input
                type="text"
                className="search-input"
                placeholder="Search products"
              />
              <img src={assets.search_icon} alt="search" />
            </div>

            {/* Buttons */}
            <div className="button-group">
              {/* Owner Dashboard / List Cars */}
              <button
                onClick={() => (isOwner ? navigate("/owner") : changeRole())}
                className="primary-btn"
              >
                {isOwner ? "Dashboard" : "List Cars"}
              </button>

              {/* Login / Logout */}
              {!user ? (
                <button
                  onClick={() => setShowLogin(true)}
                  className="login-btn"
                >
                  Login
                </button>
              ) : (
                // Show small logout button (optional) and avatar
                <button onClick={() => logout()} className="login-btn">
                  Logout
                </button>
              )}

              {/* Dark mode toggle (left of avatar) */}
              <button
                onClick={() => dispatch({ type: "TOGGLE" })}
                className="dark-mode-toggle"
                aria-label="toggle dark mode"
              >
                {darkMode ? (
                  <div className="dm-inner">
                    <LightModeOutlinedIcon />
                    <span className="dm-text">Light</span>
                  </div>
                ) : (
                  <div className="dm-inner">
                    <DarkModeOutlinedIcon />
                    <span className="dm-text">Dark</span>
                  </div>
                )}
              </button>

              {/* Avatar with initials (to the right of dark mode) */}
              {user && (
                <div
                  className="user-avatar"
                  title={user.name || user.email}
                  onClick={() => {
                    // optional: navigate to profile or open dropdown
                    navigate("/"); // change if you want different behaviour
                  }}
                >
                  {getInitials(user.name, user.email)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

