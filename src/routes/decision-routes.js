import { Router } from "express";
import { decisionService } from "../services/decision-service.js";
import { makeSuccessResponse, makeErrorResponse } from "../middlewares/reqresmiddleware.js";


export const decisionRouters = Router();

decisionRouters.post("/get-decision", async (req, res) => {
    try {
        const body = req.body;
        const finalDecisionMessage = await decisionService.getDecision(body);
        makeSuccessResponse(200, {finalDecisionMessage}, res);                
    } catch (exception) {
        makeErrorResponse(500, exception, res, "Decision Software Error Occured");
    }
})