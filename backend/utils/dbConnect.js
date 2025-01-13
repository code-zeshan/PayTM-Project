import mongoose from "mongoose";
import config from "config"

async function dbConnect(){
    try {
        let dbURL = config.get("DB_URL");
        await mongoose.connect(dbURL);
        console.log("Database connected Successfully!");
    } catch (error) {
        console.log(error);
    }
}

export default dbConnect;