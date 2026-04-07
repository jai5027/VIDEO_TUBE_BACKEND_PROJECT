import dotenv from "dotenv"
import connectDB from "./src/db/db.js"
import app from "./src/app.js"
dotenv.config()

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("error: ", error)
        throw error
    })
    let PORT = process.env.PORT
    app.listen(PORT || 8000, () => {
        console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
    })
})
.catch((err) => {
    console.error("ERROR: ", err)
})