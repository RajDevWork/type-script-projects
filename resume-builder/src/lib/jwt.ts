import { JwtPayload } from '@/types/user.types'
import jwt from 'jsonwebtoken'

export const generateToken = (payload:JwtPayload): string =>{
    return jwt.sign(payload,process.env.JWT_SECRET!)
}

export const verifyToken = (token:string)=>{
    return jwt.verify(token,process.env.JWT_SECRET!)
}