
// import React from 'react';
// import { useAppContext } from '../context/AppContext'
// import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';
// import '../style/Login.css'; // Adjust path if needed

// const login = () => {
// const {setShowLogin, axios, setToken, navigate, setUser} = useAppContext()

//   const [state, setState] = React.useState("login");
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");

//   const onSubmitHandler = async (event) => {
    
//      try {
//              event.preventDefault();
//              const { data } = await axios.post(`/api/user/${state}`, { name, email, password })

//              if (data.success){
//                  navigate('/')
//                  setToken(data.token)
//                 //  setUser(data.user); // <-- Add this line
//                  localStorage.setItem('token', data.token)
//                 //  axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
//                  setShowLogin(false)
//                  toast.success("Logged in!")
//                 }else{
//                  toast.error(data.message)
//              }
//          } catch (error) {
//              toast.error(error.message)
//          }
     
  
//   };

//   return (

//       <div class="login-overlay">
//         <form class="login-form">
//           <h2 class="login-title">Login to <span class="highlight">YourApp</span></h2>

//           <input type="email" class="input-field" placeholder="Email" />
//           <input type="password" class="input-field" placeholder="Password" />

//           <div class="forgot-password">
//             <Link to="/forgot-password">Forgot Password?</Link>
//           </div>

//           <button class="login-button">Login</button>

//           <div class="signup-text">
//             Don't have an account? <a href="#">Sign Up</a>
//           </div>

//           <button class="google-login-button">
//             <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
//             class="icon" alt="Google" />
//             Continue with Google
//           </button>

//           <button class="apple-login-button">
//             <img  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
//             class="icon" alt="Apple" />
//             Continue with Apple
//           </button>
//         </form>
//       </div>

//   );
// };

// export default login;

// // import React from 'react';
// // import { useAppContext } from '../context/AppContext';
// // import toast from 'react-hot-toast';
// // import { Link } from 'react-router-dom';
// // import '../style/Login.css';

// // const Login = () => {
// //   const { setShowLogin, axios, setToken, navigate, setUser } = useAppContext();

// //   const [state, setState] = React.useState("login"); // 'login' or 'register'
// //   const [name, setName] = React.useState("");
// //   const [email, setEmail] = React.useState("");
// //   const [password, setPassword] = React.useState("");

// //   const onSubmitHandler = async (event) => {
// //     event.preventDefault();
// //     try {
// //       const { data } = await axios.post(`/api/user/${state}`, {
// //         name,
// //         email,
// //         password,
// //       });

// //       if (data.success) {
// //         navigate('/');
// //         setToken(data.token);
// //         // setUser(data.user);
// //         localStorage.setItem('token', data.token);
// //         setShowLogin(false);
// //         toast.success(state === "login" ? "Logged in!" : "Account created!");
// //       } else {
// //         toast.error(data.message);
// //       }
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   };

// //   return (
// //     <div className="login-overlay">
// //       <form className="login-form" onSubmit={onSubmitHandler}>
// //         <h2 className="login-title">
// //           {state === "login" ? "Login to" : "Register on"} <span className="highlight">YourApp</span>
// //         </h2>

// //         {/* Name input - only show when registering */}
// //         {state === "register" && (
// //           <input
// //             type="text"
// //             className="input-field"
// //             placeholder="Name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //           />
// //         )}

// //         {/* Email */}
// //         <input
// //           type="email"
// //           className="input-field"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />

// //         {/* Password */}
// //         <input
// //           type="password"
// //           className="input-field"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />

// //         {state === "login" && (
// //           <div className="forgot-password">
// //             <Link to="/forgot-password">Forgot Password?</Link>
// //           </div>
// //         )}

// //         {/* Submit button */}
// //         <button type="submit" className="login-button">
// //           {state === "login" ? "Login" : "Sign Up"}
// //         </button>

// //         {/* Toggle between login/register */}
// //         <div className="signup-text">
// //           {state === "login" ? (
// //             <>Don't have an account? <span onClick={() => setState("register")} className="highlight cursor-pointer">Sign Up</span></>
// //           ) : (
// //             <>Already have an account? <span onClick={() => setState("login")} className="highlight cursor-pointer">Login</span></>
// //           )}
// //         </div>

// //         {/* Optional: Social logins */}
// //         <button className="google-login-button" type="button">
// //           <img
// //             src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
// //             className="icon"
// //             alt="Google"
// //           />
// //           Continue with Google
// //         </button>

// //         <button className="apple-login-button" type="button">
// //           <img
// //             src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
// //             className="icon"
// //             alt="Apple"
// //           />
// //           Continue with Apple
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;



import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import "../style/Login.css";

const Login = () => {
  const {
    setShowLogin,
    setShowVerifyEmail,
    axios,
    fetchUser,
    setShowResetPassword,
  } = useAppContext();

  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/user/${state}`, { name, email, password }, { withCredentials: true });

      if (data.success) {
        if (state === "login") {
          // Login: store token (if backend sent one) and fetch user
          // if (data.token) {
          //   localStorage.setItem("token", data.token);
          //   axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
          // }
          await fetchUser();
          toast.success("Logged in!");
          setShowLogin(false);
        } else {
          // Registration: backend should have sent email (and optionally a temp userId)
          toast.success("Registered! Please verify your email");
          if (data.email) {
            localStorage.setItem("pendingEmail", data.email);
            if (data.userId) localStorage.setItem("pendingUserId", data.userId);
            setShowLogin(false);
            setShowVerifyEmail(true);
          } else {
            toast.error("No email returned from server");
          }
        }
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
    }
  };

  return (
    <div onClick={() => setShowLogin(false)} className="login-overlay">
      <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className="login-form">
        <p className="login-title">
          <span className="highlight">User</span> {state === "login" ? "Login" : "Sign Up"}
        </p>

        {state === "register" && (
          <div className="form-group">
            <p>Name</p>
            <input type="text" value={name} placeholder="Type here" onChange={(e) => setName(e.target.value)} required className="form-input" />
          </div>
        )}

        <div className="form-group">
          <p>Email</p>
          <input type="email" value={email} placeholder="Type here" onChange={(e) => setEmail(e.target.value)} required className="form-input" />
        </div>

        <div className="form-group">
          <p>Password</p>
          <input type="password" value={password} placeholder="Type here" onChange={(e) => setPassword(e.target.value)} required className="form-input" />
        </div>

        {state === "login" && (
          <p className="forgot-link">
            <span onClick={() => { setShowLogin(false); setShowResetPassword(true); }} style={{ cursor: "pointer", color: "#007bff", textDecoration: "underline" }}>
              Forgot Password?
            </span>
          </p>
        )}

        {state === "register" ? (
          <p>Already have an account? <span onClick={() => setState("login")} className="form-toggle">Click here</span></p>
        ) : (
          <p>Create an account? <span onClick={() => setState("register")} className="form-toggle">Click here</span></p>
        )}

        <button type="submit" className="form-submit">{state === "register" ? "Create Account" : "Login"}</button>
      </form>
    </div>
  );
};

export default Login;
