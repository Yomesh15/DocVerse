import express from "express"
import connectDB from "./connectDB/connectDB.js"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import UserRoute from "./routes/user.route.js"
import DoctorRoute from "./routes/doctor.route.js"
import AppointmentRoute from "./routes/appointment.route.js"
import NotificationRoute from "./routes/notification.route.js"


const app = express()

// Connect Dataabase
connectDB()


app.use(express.json())
app.use(cors())


// Routes
app.use("/api/patient", UserRoute)
app.use("/api/doctor", DoctorRoute)
app.use("/api/appointment", AppointmentRoute)
app.use("/api/notification", NotificationRoute)



// PORT Listening
const PORT = process.env.PORT || 2005
app.listen(PORT,()=>{
    console.log(`Server at http://localhost:${PORT}`);
})