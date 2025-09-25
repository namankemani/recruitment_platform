import express from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from "./db.js";
import jwt from 'jsonwebtoken';
import User from "./models/user.js"

dotenv.config();
connectDB();


const app = express();
app.use(express.json());
app.use(cors());

const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

app.post("/api/register",async (req,res)=>{
    const {email,password, fullName} = req.body;
    if(!email || !password){
        return res.status(400).json({error:"Email & Password required"});
    }

    try{
        const existing = await User.findOne({email});
        if(existing) return res.status(409).json({error:"Email already exist"});


        const hash = await bcrypt.hash(password,10);
        const user = await User.create({email, passwordHash: hash,fullName});

        res.status(201).json({id: user.id,email: user.email, fullName: user.fullName});
    }catch(err){
        console.error(err);
        res.status(500).json({error:"Server Error"});
    }
});

app.post("/api/login",async (req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user) return res.status(401).json({error: "Email Not Found"});

        const match = await bcrypt.compare(password, user.passwordHash);
        if(!match) return res.status(401).json({error: "Invalid Credentials"});

        const token = jwt.sign({userId: user._id}, JWT_SECRET, {expiresIn:"1h"});
        res.json({token});
    }catch(err){
        console.error(err);
        res.status(500).json({error:"Server Error"});
    }
    
});

app.get("/api/profile", async (req,res)=>{
    const auth = req.headers["authorization"];
    if(!auth) return res.status(401).json({error:"Token Required!"});

    const token = auth.split(" ")[1];

    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        const user = await User.findById(decoded.userId).select("-passwordHash");
        if(!user) return res.status(404).json({error: "User Not Found"});

        res.json(user);
    }catch(err){
        console.error(err);
        res.status(401).json({error: "Invalid/ Expired Token"})
    }

});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Backend Running on port 5000")
});