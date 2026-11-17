
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import contactRoute from "./routes/contactRoute.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Agriculture Project API is running successfully!",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoute);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/services", serviceRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found.",
  });
});


const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

const startServer = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing. Set it in the environment.");
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing. Set it in the environment.");
    }

    await connectDB();

    app.listen(PORT, HOST, () => {
      console.log(`Server running on ${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error("Server Startup Error:", error.message);
    process.exit(1);
  }
};

startServer();
