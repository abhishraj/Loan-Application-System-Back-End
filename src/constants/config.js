import * as dotenv from "dotenv";
dotenv.config();
const parsedVariables = process.env;
export const PORT = parsedVariables.PORT;