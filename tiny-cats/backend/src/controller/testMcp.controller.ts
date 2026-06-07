import { Request, Response } from "express";
import { getMcpClient } from "../services/mcp.service"
import { generateAiResponse } from "../services/gemini.service";

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

        //respons

        let response = (result.content as any[])[0].text

        //generating AI recommendation from data
        let prompt = `
            Available Cats data:
            ${response}

            Recommend best cats.
        `

        const AiResult = await generateAiResponse(prompt)

        return res.json({
            success:true,
            AiResult
        })
}