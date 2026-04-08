import dotenv from "dotenv"
import connectDB from "./src/db/db.js";
import app from "./src/app.js"
dotenv.config()

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("error: ", error)
        throw error
    })
    
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`SERVER RUNNING ON PORT ${PORT}`)
    })
})
.catch((error) => {
    console.log("SERVER CONNECTION FAILED")
})
