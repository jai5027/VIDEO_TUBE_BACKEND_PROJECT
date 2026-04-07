import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
    {
     username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
        lowercase: true
     },
     email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
     },
     fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
     },
     avatar: {
        type: String,
        required: true,
     },
     coverImage: {
        type: String
     },
     watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "video"
        }
     ],
     password: {
        type: String,
        required: [true, "Password is required"]
     },
     refreshToken: {
        type: String
     }

},{ timestamps: true })

userSchema.pre("save", async function (next) {
    if(!this.isModefied("password")) return next()
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}

const userModel = mongoose.model("user", userSchema)
export default userModel