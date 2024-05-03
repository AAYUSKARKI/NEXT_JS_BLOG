import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection : ConnectionObject = {}

async function dbConnect() : Promise<void> {
    if(connection.isConnected) {
        console.log("Using existing database")
        return
    }
    try {
        const db = await mongoose.connect("mongodb+srv://alexkarki2060:aayus123@cluster0.rcydpff.mongodb.net/practice")
        connection.isConnected = db.connections[0].readyState
        console.log("MongoDB connected")
    } catch (error) {      
        console.log("Database connection failed",error)
        process.exit(1)
    }
}

export default dbConnect