import { Request, Response } from "express";
import { getMcpClient } from "../services/mcp.service"

export const TestMPCController = async(req:Request,res:Response)=>{
        const client = await getMcpClient()

        // console.log("client = ",client)
        //this is await operation.
        const tools = await client.listTools();


        //result chaiye
        const result = await client.callTool({
            name:"recommend_cats",
            arguments:{
                kidsFriendly:true,
                apartmentFriendly:true
            }
        })

        return res.json({
            success:true,
            result
        })
}