import express from "express";
import { aiRecommendController } from "../controller/aiRecommend.controller";

const router = express.Router();

router.post("/recommendByAi", aiRecommendController);

export default router;
