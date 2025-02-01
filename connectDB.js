import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Connected to mongodb ${connect.connection.host}`)
    }
    catch (error) {
        console.log(`Error in monogdb`, error.message);
        process.exit(1)
    }
}