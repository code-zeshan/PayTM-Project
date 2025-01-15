import express from "express"
import zod from "zod"
import User from "../models/Users.js"
import jwt from "jsonwebtoken"

let JWT_SECRET = config.get("JWT_SECRET");
const router = express.Router();

//sign up and sign in Routes

const signupSchema = zod.object(
    {
        username: zod.string(),
        password: zod.string(),
        firstName:zod.string(),
        password:zod.string(),
    }
)


router.post("/signup", async (req,res)=>{
    let body = req.body;
    const success = signupSchema.safeParse(req.body);
    if(!success){
        return res.status(500).json({msg:"Email already taken or Incorrect!"});
    }

    let user = User.findOne({
        username: body.username
    })

    if(user._id){
        return res.status(500).json({msg:"Email already taken or Incorrect!"});
    }

    const dbUser = await User.create(body);
    const token = jwt.sign({userId: dbUser._id}, JWT_SECRET)
    res.json({msg: "User created successfully!", token:token})


})



export default router;