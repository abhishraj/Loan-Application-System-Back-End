import { Router } from "express";
import { accountingService } from "../services/accounting-service.js";
import { makeSuccessResponse, makeErrorResponse } from "../middlewares/reqresmiddleware.js";
import { joiValidation, makeJoiValidationResponse } from "../middlewares/schemasValidations.js";
import { fetchBalanceSheetSchema } from "../schemas/accountingSchemas.js";

export const accountingRouters = Router();

accountingRouters.get("/fetch-balance-sheet", async (req, res) => {
    try {
        const query = req.query;
        const joiValidationResult = joiValidation(query, fetchBalanceSheetSchema);
        const isJoiErrors = makeJoiValidationResponse(joiValidationResult, res);
        if (!isJoiErrors) {
            const balanceSheet = await accountingService.fetchBalanceSheet(joiValidationResult.data);
            makeSuccessResponse(200, balanceSheet, res);
        }                
    } catch (exception) {
        makeErrorResponse(500, exception, res, "Accounting Software Error Occured");
    }
})
