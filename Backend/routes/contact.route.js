import Contact from "../models/contact.model.js";
import express from "express";

const contact_router = express.Router();

contact_router.post("/contact", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }

        await Contact.create({ name, email, subject, message });

        return res.status(200).json({
            message: "We will contact you soon",
            success: true
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
});


export default contact_router;