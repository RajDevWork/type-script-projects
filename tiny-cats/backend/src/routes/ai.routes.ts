import express from "express";
import { askAiController } from "../controller/ai.controller";

const router = express.Router();

router.post("/ask", askAiController);

export default router;
