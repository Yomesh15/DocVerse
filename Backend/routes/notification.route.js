import express from "express";
import notificationModel from "../models/notification.model.js";
import auth from "../middlewares/auth.js";

const notification_router = express.Router();

 
notification_router.get("/", auth, async (req, res) => {
  try {
    const userId = req.user.id;

    const notifications = await notificationModel
      .find({ userId })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      notifications,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

 
notification_router.patch("/read/:id", auth, async (req, res) => {
  try {
    const notification = await notificationModel.findById(req.params.id);

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found",
      });
    }
 
    if (notification.userId.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Not allowed",
      });
    }

    notification.isRead = true;
    await notification.save();

    res.json({
      success: true,
      message: "Marked as read",
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export default notification_router;