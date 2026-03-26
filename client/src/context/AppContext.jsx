
import { createContext } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import {toast} from 'react-hot-toast'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true; // send cookies when possible

export const AppContext= createContext();

export const AppProvider = ({children}) =>{
    const navigate = useNavigate()
    const currency = import.meta.env.VITE_CURRENCY
   
     
    // const [token, setToken]= useState(null) //i have made this comment
    const [user, setUser]= useState(null)
    const [isOwner, setIsOwner]= useState(false)
    const [showLogin, setShowLogin]= useState(false)
    const [showVerifyEmail, setShowVerifyEmail] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [pickupDate, setPickupDate]= useState(' ')
    const [returnDate, setReturnDate]= useState(' ')
    
    const[cars, setCars]= useState([])

    // Helper: apply token from localStorage to axios header
  const applyAuthHeaderFromStorage = () => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  const fetchUser = async () => {
    try {
      applyAuthHeaderFromStorage();
      const { data } = await axios.get("/api/user/getUserData", { withCredentials: true });
      if (data.success) {
        setUser(data.userData || data.user);
        setIsOwner((data.userData?.role || data.user?.role) === "owner");
      } else {
        setUser(null);
        setIsOwner(false);
      }
    } catch (error) {
      setUser(null);
      setIsOwner(false);
    }
  };

  const fetchCars = async () => {
    try {
      const { data } = await axios.get("/api/user/cars");
      data.success ? setCars(data.cars) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      await axios.post("/api/user/logout", {}, { withCredentials: true });
      localStorage.removeItem("token");
      applyAuthHeaderFromStorage();
      setUser(null);
      setIsOwner(false);
      toast.success("You have been logged out");
      navigate("/");
    } catch {
      toast.error("Logout failed");
    }
  };

  const changeRole = async () => {
    try {
      const { data } = await axios.post("/api/owner/change-role", {}, { withCredentials: true });
      if (data.success) {
        setIsOwner(true);
        toast.success(data.message);
        navigate("/owner");
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Role change failed");
    }
  };

  useEffect(() => {
    const storedRole = localStorage.getItem("isOwner");
    if (storedRole === "true") setIsOwner(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("isOwner", isOwner);
  }, [isOwner]);

  useEffect(() => {
    // on app init, attach token header and try fetch user & cars
    applyAuthHeaderFromStorage();
    fetchUser();
    fetchCars();
  }, []);

  const value = {
    navigate,
    currency,
    axios,
    user,
    setUser,
    isOwner,
    setIsOwner,
    changeRole,
    showLogin,
    setShowLogin,
    showVerifyEmail,
    setShowVerifyEmail,
    showResetPassword,
    setShowResetPassword,
    logout,
    fetchUser,
    fetchCars,
    cars,
    setCars,
    pickupDate,
    setPickupDate,
    returnDate,
    setReturnDate,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);



//     // Function to check if user is logged in
//     const fetchUser = async ()=>{
//         try {
//              const {data}= await axios.get('/api/user/data')
//              if (data.success){
//                  setUser(data.user)
//                  setIsOwner(data.user?.role=='owner')
//              }else{
//                  navigate('/')
//              }
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

//     // Function to fetch all cars from the server

//     const fetchCars = async()=>{
//         try {
//             const {data} = await axios.get('/api/user/cars')
//             data.success ? setCars(data.cars) : toast.error(data.message)
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

//     // Function to log out the user
//     const logout = ()=>{
//         localStorage.removeItem('token')
//         setToken(null)
//         setUser(null)
//         setIsOwner(false)
//         axios.defaults.headers.common['Authorization']=''
//         toast.success('You have been logged out')
//     }
    
//     // useEffect to retrive the token from localStroage
//     useEffect(()=>{
//         const token = localStorage.getItem('token')
//         setToken(token)
//         fetchCars()
//     },[])

//     // useEffect to fetch user data when token is available
//     useEffect(()=>{
//         if(token){
//             axios.defaults.headers.common['Authorization'] = ` ${token}` //Bearer
//             fetchUser()      
//         }
//     },[token])

//     const value = {
//           navigate, currency, axios, user,setUser,
//           token, setToken, isOwner, setIsOwner, fetchUser,
//           showLogin, setShowLogin, logout, fetchCars,
//           cars, setCars, pickupDate, setPickupDate, returnDate,
//           setReturnDate
//      }


//     return(
//         <AppContext.Provider value={value}>
//             {children}
//         </AppContext.Provider>
//     )
// }

// export const useAppContext = ()=>{
//     return useContext(AppContext)
// }



