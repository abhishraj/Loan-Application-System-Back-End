import { dummyBalancedSheet } from "../constants/dummyBalancedSheet.js";
import Axios from "axios";

class AccountingService {

    static instance;
    static getInstance() {
        if (!AccountingService.instance) {
            AccountingService.instance = new AccountingService();
        }
        return AccountingService.instance;
    }

    async fetchBalanceSheet (query) {
        try {
            const balanceSheetFetched = dummyBalancedSheet;

            // Replace url with real accounting software API url
            // const response = await Axios.get(url, {params: query});
            // const balanceSheetFetched = response.data;

            Promise.resolve(balanceSheetFetched);
        } catch (exception) {
            console.log(exception);
            Promise.reject(exception);
        }
        
    }
}

export const accountingService = AccountingService.getInstance();