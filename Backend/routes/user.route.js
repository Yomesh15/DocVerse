import User from "../models/user.model.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AdminProtectRoute from "../../Frontend/src/protect/protect.route.admin.js";
import ProtectAPI from "../middlewares/protectapi.js";

const user_router = express.Router();



// user registerration
user_router.post("/register", async (req, res) => {
    try {
        const { name, email, phone, city, password } = req.body;

        if (!name || !email || !phone || !city || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }

        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).json({
                message: "Phone number must contain exactly 10 digits",
                success: false,
            });
        }

        const existing = await User.findOne({ email });

        if (existing) {
            return res.status(400).json({
                message: "User already exists",
                success: false,
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            phone,
            city,
            password: hashPassword,
        });

        return res.status(201).json({
            message: "Registration Success",
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


// user login
user_router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false,
            });
        }

        const comparePassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!comparePassword) {
            return res.status(400).json({
                message: "Invalid Credentials",
                success: false,
            });
        }

        const token = jwt.sign({
            id: user._id,
            role: "patient",
            email: user.email
        }, process.env.JWT_SECRET);
        

        return res.status(200).json({
            message: `Welcome ${user.name}`,
            success: true,
            token,
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
});


// get all users
user_router.get("/getallusers", ProtectAPI, async (req, res) => {
    try {
        const allusers = await User.find().select(
            "name email phone gender image city address"
        );

        return res.status(200).json({
            message: "All Users Fetched",
            success: true,
            allusers,
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
});



export default user_router;