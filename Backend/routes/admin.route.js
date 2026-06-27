import Admin from "../models/admin.model.js";
import express from "express";

const admin_router = express.Router();

admin_router.post("/login", async (req, res) => {
  try {
    const { email, pin, password } = req.body;

    if (!email || !pin || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const exists = await Admin.findOne({ email });

    if (!exists) {
      return res.status(400).json({
        message: "Admin does not exist",
        success: false,
      });
    }

    if (Number(pin) !== exists.pin || password !== exists.password) {
      return res.status(400).json({
        message: "Invalid Credentials",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Welcome Back Admin",
      success: true,
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
});



export default admin_router;