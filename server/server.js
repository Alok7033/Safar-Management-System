// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import cookieParser from "cookie-parser";

// import connectDB from "./configs/db.js";
// import userRouter from "./routes/userRoutes.js";
// import ownerRouter from "./routes/ownerRoutes.js";
// import bookingRouter from "./routes/bookingRoutes.js";
// import adminRouter from "./routes/adminRoutes.js";
// import ChatRoutes from "./routes/ChatRoutes.js";



// const app = express();




// // ✅ CORS setup to allow frontend at localhost:5173
// app.use(cors({
//   origin: "http://localhost:5173", // or process.env.CLIENT_URL
//   credentials: true
// }));

// app.use(express.json());
// app.use(cookieParser());

// // ✅ Routes
// app.get('/', (req, res) => res.send("Server is running"));
// app.use("/api/chat", ChatRoutes);
// app.use('/api/user', userRouter);
// app.use('/api/owner', ownerRouter);
// app.use('/api/bookings', bookingRouter);
// app.use('/api/admin', adminRouter);

// // ✅ Start Server
// const startServer = async () => {
//   try {
//     await connectDB();
//     const PORT = process.env.PORT || 8000;
//     app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
//   } catch (err) {
//     console.error("❌ Failed to connect to database:", err.message);
//   }
// };

// startServer();

// 🔴 SSL error fix (development only)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import ChatRoutes from "./routes/ChatRoutes.js";

const app = express();

// ✅ CORS setup
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.get('/', (req, res) => res.send("Server is running"));
app.use("/api/chat", ChatRoutes);
app.use('/api/user', userRouter);
app.use('/api/owner', ownerRouter);
app.use('/api/bookings', bookingRouter);
app.use('/api/admin', adminRouter);

// ✅ Start Server
const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to database:", err.message);
  }
};

startServer();