import Appointment from "../models/appointment.model.js";
import notificationModel from "../models/notification.model.js";
import express from "express";
import auth from "../middlewares/auth.js";

const appointment_router = express.Router();


appointment_router.post("/book", auth, async (req, res) => {
    try {
        console.log("REQ USER:", req.user);
        const { doctorId, appointmentDate, appointmentTime, problem } = req.body;

        if (!doctorId || !appointmentDate || !appointmentTime) {
            return res.status(400).json({
                success: false,
                message: "All required fields are mandatory.",
            });
        }

        const appointment = await Appointment.create({
            patient: req.user.id,
            doctor: doctorId,
            appointmentDate,
            appointmentTime,
            problem,
            status: "Pending",
        });

        return res.status(201).json({
            success: true,
            message: "Appointment booked successfully.",
            appointment,
        });

    } catch (error) {
        console.log("BOOK ERROR:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});


appointment_router.get("/doctor", auth, async (req, res) => {
    try {
        const doctorId = req.user.id;

        const allAppointments = await Appointment.find({ doctor: doctorId })
            .populate("patient", "name email phone city")
            .populate("doctor", "name email");

        res.json({
            success: true,
            appointments: allAppointments
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});


appointment_router.patch("/status/:id", auth, async (req, res) => {
    try {
        const { status } = req.body;

        const appointment = await Appointment.findById(req.params.id)
            .populate("patient");

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found"
            });
        }

        appointment.status = status;
        await appointment.save();

        console.log("CREATING NOTIFICATION FOR:", appointment.patient);

        await notificationModel.create({
            userId: appointment.patient._id,
            title: `Appointment ${status}`,
            message: `Your appointment has been ${status} by doctor`
        });

        return res.json({
            success: true,
            message: "Appointment updated successfully"
        });

    } catch (error) {
        console.log("STATUS ERROR:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});

export default appointment_router;