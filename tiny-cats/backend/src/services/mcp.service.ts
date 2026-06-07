import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

let client:Client;

export const getMcpClient = async ()=>{

    //create transporter
    const transport = new StdioClientTransport({
        command:'npx',
        args:['tsx','../mcp_server/src/index.ts']
    });

    //create client to connect mcp
    client = new Client({
        name:'tiny-cats-client',
        version:'1.0.0'
    });

    //connect client
    await client.connect(transport);

    return client;


}