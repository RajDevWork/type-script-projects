import { generateToken } from "@/lib/jwt";
import { connectToMongoDB } from "@/lib/mongodb";
import { User } from "@/models/User.model";
import { ApiResponse } from "@/types/api.types";
import { RegisterBody } from "@/types/user.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        await connectToMongoDB()

        let body: RegisterBody = await req.json()
        let {name,email,password,mobile} = body

        if(!name || !email || !password){
            return NextResponse.json<ApiResponse>({
                success:false,
                message:"All fields are required!"
            },{
                status:400
            })
        }
        //check for exists
        const isExisted = await User.findOne({email})
        if(isExisted){
            return NextResponse.json<ApiResponse>({
                success:false,
                message:"Email Already exists!"
            },{
                status:409
            })
        }
        //create new one
        const newUser = await User.create({
            name,email,password,mobile
        })

        //generate token
        const Token = generateToken({userId:newUser._id.toString()})

        //create response

        const response = NextResponse.json<ApiResponse>({
            success:true,
            message:"User Registered successfully!",
            data:{
                id:newUser._id,
                name:newUser.name,
                email:newUser.email
            }
        },{status:201})

        response.cookies.set('token',Token,{
            httpOnly:true,
            sameSite:'lax',
            maxAge:60 * 60 * 1000
        })

        return response

    } catch (error) {
       console.log("Error in register call: ",error); 
       return NextResponse.json<ApiResponse>({
        success:false,
        message:"Something went wrong",
        error:{
            error
        }
       },{status:500})
    }
}