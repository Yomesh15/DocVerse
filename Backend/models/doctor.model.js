import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },

        speciality: {
            type: String,
            required: true,
        },

        qualification: {
            type: String,
            required: true,
        },

        experience: {
            type: Number,
            required: true,
        },

        fees: {
            type: Number,
            required: true,
        },

        hospital: {
            type: String,
            required: true,
        },

        city: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        about: {
            type: String,
            default: "",
        },

        image: {
            type: String,
            default: "",
        },

        available: {
            type: Boolean,
            default: true,
        },

        verified: {
            type: Boolean,
            default: false,
        },

        rating: {
            type: Number,
            default: 0,
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true,
        },

        totalReviews: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);


const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;