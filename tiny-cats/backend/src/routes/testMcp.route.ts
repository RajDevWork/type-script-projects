import express from 'express'
import { TestMPCController } from '../controller/testMcp.controller'
const router = express.Router()

router.get("/test-mcp",TestMPCController)

export default router