import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log("DB CONNECTED SUCCESSFULLY")
  } catch (error) {
    console.log("ERROR: ", error)
    process.exit(1)
  }
}

export default connectDB