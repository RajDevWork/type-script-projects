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
            let {email,password} = body
    
            if(!email || !password){
                return NextResponse.json<ApiResponse>({
                    success:false,
                    message:"All fields are required!"
                },{
                    status:400
                })
            }
            //check for exists
            const isExisted = await User.findOne({email})
            if(!isExisted){
                return NextResponse.json<ApiResponse>({
                    success:false,
                    message:"Invalid credentials!"
                },{
                    status:404
                })
            }
          
            const matchPass = isExisted.comparePass(password)

            if(!matchPass){
                return NextResponse.json<ApiResponse>({
                    success:false,
                    message:"Invalid credentials!"
                },{
                    status:404
                })
            }
    
            //generate token
            const Token = generateToken({userId:isExisted._id.toString()})
    
            //create response
    
            const response = NextResponse.json<ApiResponse>({
                success:true,
                message:"User Loggedin successfully!",
                data:{
                    id:isExisted._id,
                    name:isExisted.name,
                    email:isExisted.email
                }
            },{status:201})
    
            response.cookies.set('token',Token,{
                httpOnly:true,
                sameSite:'lax',
                maxAge:60 * 60 * 1000
            })
    
            return response
    
        } catch (error) {
           console.log("Error in login call: ",error); 
           return NextResponse.json<ApiResponse>({
            success:false,
            message:"Something went wrong",
            error:{
                error
            }
           },{status:500})
        }
}