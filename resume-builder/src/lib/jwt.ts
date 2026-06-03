import { JwtPayload } from '@/types/user.types'
import jwt from 'jsonwebtoken'

export const generateToken = (payload:JwtPayload): string =>{
    return jwt.sign(payload,process.env.JWT_SECRET!)
}

export const verifyToken = (token: string): JwtPayload => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    if (typeof decoded === 'string') {
        throw new Error('Invalid token payload');
    }

    return decoded as JwtPayload;
};