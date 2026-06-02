import mongoose from "mongoose"

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!) // aisa isliye kyunki String me undefined nhi assign hoga. So usse bachne ke liye Generics kaa use karte hain (!)
        console.log("Connected to DB")
    } catch (error) {
        console.log("Db Connection error: ",error)
    }
}