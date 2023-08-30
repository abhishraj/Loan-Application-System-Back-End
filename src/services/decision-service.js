class DecisionService {

    static instance;
    static getInstance() {
        if (!DecisionService.instance) {
            DecisionService.instance = new DecisionService();
        }
        return DecisionService.instance;
    }

    async getDecision (body) {
        try {
            const balanceSheet = body.balanceSheet, loanAmount = body.loanAmount;
            const { preAssessmentValue, profit: lastYearProfit } = this.preAssessmentCalculator(balanceSheet, loanAmount);
            const query = { 
                preAssessmentValue, 
                lastYearProfit,
                companyName: body.companyName,
                yearEstablished: body.yearEstablished
            }
            const finalDecision = true;
            // const decisionApiResponse = async Axios.get(decisionurl, {params: query});
            // const finalDecision = decisionApiResponse.data;
            // replace decisionurl with real url and comment decisionApiResponse variable 
            const finalDecisionMessage = "Application Submitted successfully";
            if (!finalDecision) {
                finalDecisionMessage = "Application submission failed";
            }
            Promise.resolve(finalDecisionMessage);
        } catch (exception) {
            Promise.reject(exception);
        }
    }

    preAssessmentCalculator (balanceSheet, loanAmount) {
        try {
            let preAssessmentValue = 20, profit = 0, totalAssetValue = 0, numberOfMonths = 0;
            balanceSheet.forEach((entity) => {
                if (this.isWithinLast12Months(entity.year, entity.month)) {
                    profit += entity.profitOrLoss;
                    totalAssetValue += entity.assetsValue;
                    numberOfMonths += 1;
                }
            })

            // first check if business made a profit in last 12 months
            // then check whether average asset value across 12 months final value

            const averageAssetValue = totalAssetValue/numberOfMonths;
            if (profit > 0) {
                preAssessmentValue = 60;
            }
            if (averageAssetValue > loanAmount) {
                preAssessmentValue = 100;
            }

            return { preAssessmentValue, profit };
        } catch (exception) {
            console.log("Some error Occured at preAssessment calculation", exception);
        }
    }

    isWithinLast12Months(targetYear, targetMonth) {
        const currentDate = new Date();
        
        // Calculate the month index (0-11) for the target year and month
        const targetMonthIndex = targetMonth - 1;
      
        // Loop through the last 12 months and check for a match
        for (let i = 0; i < 12; i++) {
          let year = currentDate.getFullYear();
          let month = currentDate.getMonth() - i;
          console.log(month);
          if (month < 0) {
            month += 12;
            year -= 1;
          }
      
          if (year === targetYear && month === targetMonthIndex) {
            return true;
          }
        }
      
        return false;
      }
}

export const decisionService = DecisionService.getInstance();