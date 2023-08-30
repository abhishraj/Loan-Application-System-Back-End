import { Router } from "express";
import { makeSuccessResponse, makeErrorResponse } from "../middlewares/reqresmiddleware.js";
import { accountProviders } from "../constants/master-data.js";
export const masterRouters = Router();

masterRouters.get('/initiate-app', (req, res) => {
    try {
        const body = { accountProviders };
        makeSuccessResponse(200, body, res);
    } catch(exception) {
        makeErrorResponse(400, exception, res);
    }
})
