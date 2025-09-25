import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        passwordHash:{
            type:String,
            required: true,
        },
        fullName:{
            type:String,
            required:true,
            trum: true,
        },
        role:{
            type: String,
            enum: ["candidate","recruiter"],
            default:"candidate",
        }
    },
    {timestamps:true}
);

const User = mongoose.model("User",userSchema);
export default User;