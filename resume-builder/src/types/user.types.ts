export interface IUser{
    _id:string,
    name:string,
    email:string,
    mobile:string,
    password:string,
    createdAt?:Date, // isko optional kiye hain
    updatedAt?:Date // isko optional kiye hain
}
export interface JwtPayload{
    userId:string,
    email?:string // isko optional kiye hain
}

export interface RegisterBody{
    name:string,
    email:string,
    password:string,
    mobile:string
}

export interface LoginBody{
    email:string,
    password:string
}