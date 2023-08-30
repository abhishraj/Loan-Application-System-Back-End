# Loan-Application-System-Back-End
This repo is the backend of business loan application system in which it applies some rules and consider whether a user will get that much loan or not

Clone this repo into local and first run command :- npm i Then run command :- npm run start

List of end points 
1.) http://localhost:3001/master/initiate-app To fetch the data required for initialisation of App such as list of accountants etc. This is a get API which doesn't require any query params as of now

2.) http://localhost:3001/account/fetch-balance-sheet To fetch the balance sheet from accouting software This is a get API endpoint where query must contains fields such as - businessName, yearEstablished, loanAmount, accountantProvider

3.) http://localhost:3001/decision/get-decision This is a post request which takes the balancesheet parameter in body along with business details such as business name and yearsEstablished this API also calculates the preAssessmentValue based upon given rules and it passes it to third party API as param and also the generic params that we used like loanAmount.

In these RN dummy (mock) data have been used for case of third party APIs
