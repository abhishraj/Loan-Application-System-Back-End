import express from "express";
import { PORT } from "./src/constants/config.js";
import { masterRouters } from "./src/routes/master-data-routes.js";
import { accountingRouters } from "./src/routes/accounting-routes.js";
import { decisionRouters } from "./src/routes/decision-routes.js";

const app = express();
app.use('/master', masterRouters);
app.use('/account', accountingRouters);
app.use('/decision', decisionRouters);

export function initServer() {
    app.listen(PORT, () => {
        console.log("App started listening on PORT", PORT);
    })
}
