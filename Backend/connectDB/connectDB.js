import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO)

        console.log("Database Connected");
    } catch (error) {
        console.log("Database Connection Failed");
        console.log(error);
    }
}

export default connectDB