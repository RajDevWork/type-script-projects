import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getAllCatsTool, recommendCatsTool } from "./tools/recommendCats.tool.ts";


// Create server instance
const server = new McpServer({
  name: "tiny-cats",
  version: "1.0.0",
});

//register a tool
server.registerTool("recommend_cats",{
    title:"recommend_cats",
    description:"Recommend a best cat breed according to inputs",
    inputSchema:{
        kidsFriendly:z.boolean(),
        apartmentFriendly:z.boolean()
    }
}, async ({kidsFriendly,apartmentFriendly})=>{
    const result = await recommendCatsTool(kidsFriendly,apartmentFriendly)
    
    return {
        content:[
            {
                type:'text',
                text:JSON.stringify(result)
            }
        ]
    }
})

//register another tool for get all cats data
server.registerTool("get_all_cats",{
    title:"get_all_cats",
    description:"Cats data"
}, async ()=>{
    const result = await getAllCatsTool()
    
    return {
        content:[
            {
                type:'text',
                text:JSON.stringify(result)
            }
        ]
    }
})




//always written after registering tools - connecting tools

/**
 * To run the mcp server in GUI :
 * Run Command: 
 *      npx @modelcontextprotocol/inspector
 */
const transporter = new StdioServerTransport();

server.connect(transporter)

console.log("Tiny cats mcp running...")