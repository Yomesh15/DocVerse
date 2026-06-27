import jwt from "jsonwebtoken";
import express from "express";
import Doctor from "../models/doctor.model.js";
import bcrypt from "bcrypt";

const doctor_router = express.Router();


// register for doctoor

doctor_router.post("/register", async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            password,
            speciality,
            qualification,
            experience,
            fees,
            hospital,
            city,
            address,
            about,
            image,
            gender,
        } = req.body;

        if (
            !name ||
            !email ||
            !phone ||
            !password ||
            !speciality ||
            !qualification ||
            !experience ||
            !fees ||
            !hospital ||
            !city ||
            !address ||
            !about ||
            !image ||
            !gender
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address",
            });
        }

        const phoneRegex = /^[6-9]\d{9}$/;

        if (!phoneRegex.test(phone)) {
            return res.status(400).json({
                success: false,
                message: "Phone number must be exactly 10 digits",
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters ",
            });
        }

        const emailExists = await Doctor.findOne({ email });

        if (emailExists) {
            return res.status(400).json({
                success: false,
                message: "Email already registered",
            });
        }

        const phoneExists = await Doctor.findOne({ phone });

        if (phoneExists) {
            return res.status(400).json({
                success: false,
                message: "This Phone number is already Registered",
            });
        }

        const hashpass = await bcrypt.hash(password, 11);

        await Doctor.create({
            name,
            email,
            phone,
            password: hashpass,
            speciality,
            qualification,
            experience,
            fees,
            hospital,
            city,
            address,
            about,
            image,
            gender,
        });

        return res.status(201).json({
            success: true,
            message:
                "Registration successful. Your account is pending for verification.",
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});


//for login of docctor

doctor_router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const doctor = await Doctor.findOne({ email });

        if (!doctor) {
            return res.status(400).json({
                success: false,
                message: "Doctor does not exist",
            });
        }

        const compare = await bcrypt.compare(password, doctor.password);

        if (!compare) {
            return res.status(400).json({
                success: false,
                message: "Invalid Credentials",
            });
        }

        if (!doctor.verified) {
            return res.status(403).json({
                success: false,
                message: "Your account is not verified! Please wait.",
            });
        }

        const token = jwt.sign({
            id: doctor._id,
            role: "doctor",
            email: doctor.email
        }, process.env.JWT_SECRET);
        

        return res.status(200).json({
            success: true,
            message: `Welcome Back ${doctor.name}`,
            token,
            doctor: {
                _id: doctor._id,
                name: doctor.name,
                email: doctor.email,
                speciality: doctor.speciality,
                image: doctor.image,
            },
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});


//get all doctors

doctor_router.get("/getalldoctors", async (req, res) => {
    try {
        const doctorss = await Doctor.find()

        res.status(200).json({ message: "Doctors Fetched Successfully", success: true, doctorss })
    } catch (error) {
        res.status(400).json({ message: "Internal Server Error", success: false })
    }
})



export default doctor_router;