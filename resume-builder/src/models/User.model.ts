import { IUser } from "@/types/user.types";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

//login time par compressPass nhi mil paa rha hain uske wajah se Document me methods ko add kar rhe hain.
interface UserDocument extends Omit<IUser, '_id'>, Document{
    comparePass(candidatePassword:string):boolean
} 

const UserSchema = new mongoose.Schema<UserDocument>({
    name:{
        type:String,
        trim:true,
        required:[true, 'Name is required']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true
    },
    mobile:{
        type:String,
        required:[true,'Mobile is required']
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        minlength:[6,'Minimum 6 characters required']
    }

},{timestamps:true})

//save karne se pahle password ko has karna.
UserSchema.pre("save",function(): void{
    if(!this.isModified('password')) return
    this.password = bcrypt.hashSync(this.password, 10)
})

//compare password
UserSchema.methods.comparePass = function(candidatePassword:string): boolean{
    return bcrypt.compareSync(candidatePassword,this.password)
}

export const User = mongoose.model("User",UserSchema)