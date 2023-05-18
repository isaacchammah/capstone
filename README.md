  # Can you beat the market?
  


The financial simulator that allows you to select a market index and create a portfolio of three stocks. It uses data from the past 10 years to help you determine if your portfolio has outperformed the market.

The project is an React project forked from `create-react-app`*

#### Development Environment

To set up the development environment, follow these steps:

Clone the repository to your local machine.
Navigate to the project directory.
Run the following command to install the dependencies:

*`npm install`* ; this will install all the dependencies needed to run the project

Start the development server with the following command:
##### *`npm start`*

The application will be running at http://localhost:3000 in your browser. Any errors will be displayed in the console.

## API Reference

The TwelveData API is a powerful tool for accessing financial market data. This project utilizes the API to retrieve information about stocks and indexes. In total 21 calls are made.
Below is the API reference for the TwelveData endpoints used in this project:

## Base URL

The base URL for all API calls is `https://api.twelvedata.com/`.

## Authentication

To authenticate your API requests, you need to include your API key in the URL parameters. Append `apikey=<YOUR_API_KEY>` to each API call.

# API Calls

Profile
Retrieve profile information for a specific symbol.

## Profile

Retrieve profile information for a specific symbol.

**Endpoint:**


/profile?symbol=<SYMBOL>&apikey=<API_KEY>

Example:
https://api.twelvedata.com/profile?symbol=dis&apikey=<API_KEY>

Logo
Retrieve the logo URL for a specific symbol.
/logo?symbol=<SYMBOL>&apikey=<API_KEY>

Income Statement
Retrieve the income statement for a specific symbol.
/income_statement?symbol=<SYMBOL>&apikey=<API_KEY>

Balance Sheet
Retrieve the balance sheet for a specific symbol.
/balance_sheet?symbol=<SYMBOL>&apikey=<API_KEY>

Average Price
Retrieve the average price for a specific symbol over a given interval and output size.
/avgprice?symbol=<SYMBOL>&interval=<INTERVAL>&outputsize=<OUTPUT_SIZE>&apikey=<API_KEY>
Please note that <SYMBOL>, <API_KEY>, <INTERVAL>, and <OUTPUT_SIZE> need to be replaced with the appropriate values in your API calls.

For more detailed information on the API endpoints and their parameters, refer to the TwelveData API documentation.

 ## Dependencies

The project utilizes several libraries and APIs to provide a seamless user experience:

- [ApexCharts](https://apexcharts.com/) is used to create the scatterplot graph on the last page of the project.
- [Axios](https://github.com/axios/axios) is used to make API calls to retrieve information about the ETFs and stocks. The TwelveData API is used for all API calls.
- [React-Scroll](https://www.npmjs.com/package/react-scroll) is used to smoothly scroll to a specific ID when a button is clicked.
- [Swal](https://sweetalert2.github.io/) is used to create a modal that appears between the Stocks and Results pages.
- [Mathjs](https://mathjs.org/) is used to calculate the mean, standard deviation, and variance of the ETFs and stocks.
- [Recharts](https://recharts.org/en-US/) is used to create the line charts for the ETFs.
- [React-Icons/FA](https://react-icons.github.io/react-icons/) is used to display a scroll-to-top icon in the bottom right corner of the screen.
- [Calculate-Correlation](https://www.npmjs.com/package/calculate-correlation) is used to calculate the correlation between the stocks once the weights have been determined.
- [react-router-dom] (https://www.npmjs.com/package/react-router-dom) to create one single route


#### Additional Sections

The project consists of a single page divided into four sections. Each section becomes available when the user clicks on the corresponding lower button.

1- The Home section provides instructions on how to use the simulator. 

2- In the Indexes section, users can learn about major market indexes and their workings. They can select one of these indexes and receive real-life information about its prices. The selected index becomes the benchmark against which the user’s portfolio will be measured.

3- In the Stocks section, users can choose three stocks and the percentage of their portfolio they wish to invest in each. They will receive basic information about the companies and can use the provided filter if they don’t know the name of a company. An alert message will appear if the weights don’t add up to 100. Only stocks that have been in the market for at least 10 years can be used in this simulator. If the user selects a stock that has been in the market for less than 10 years, an error message will appear, prompting them to select another stock.  If the user is unfamiliar with the accounting indexes, they can click on the “What are these numbers?” button, and a modal will appear on the screen with a table showing the formula and usefulness of the indexes.

For each stock the following accounting indexes were calculated:

Sales growth: (Current period sales - Previous period sales) / Previous period sales

Gross Margin: Gross profit/sales

Ebitda Margin: Ebitda/Sales

Net Margin: Net profit/Sales

Current Ratio: Current assets/ Current liabilities

Current Ratio: Financial debt / capital invested

The portfolio’s expected return, variance, and standard deviation will be calculated using the following formulas:

Expected Return of the Portfolio:
E(Rp) = wa * ra + wb * rb + wc * rc

Variance of the Portfolio:
Var(Rp) = wa^2 * Var(ra) + wb^2 * Var(rb) + wc^2 * Var(rc) + 2 * wa * wb * Cov(ra, rb) + 2 * wa * wc * Cov(ra, rc) + 2 * wb * wc * Cov(rb, rc)

The covariance between X and Y:
is defined as Cov(X,Y)=E[(X−EX)(Y−EY)]=E[XY]−(EX)(EY).

Standard Deviation of the Portfolio:
σp = sqrt(Var(Rp))

In these formulas, “w” represents the weight invested in each stock, “r” represents the monthly return of the stock in the last 10 years, and “cov(r,r)” represents the covariance between the two assets.

4- In the Results section, users can compare the performance of their portfolio against the market index they had previously chosen. They will receive a clear message indicating whether they were able to beat the market or not. The results are presented in a user-friendly way, with a colorful scatterplot graph and a table that allows users to easily visualize and understand their performance.

## Authors
- [@isaacchammah](https://github.com/isaacchammah/)

## Lessons Learned

Throughout this project, I gained valuable experience in utilizing various React libraries and found that the documentation provided by these libraries is incredibly helpful. Additionally, I learned how to use math in React to calculate complex values such as stock correlation and standard deviation.

I also developed a strong understanding of how to use state and props effectively, which allowed me to create dynamic and interactive components. Furthermore, I gained experience in creating advanced graphs in React, such as the scatterplot graph featured in the Results section of the project.

## Next steps

To enhance the user experience of the simulator, I want to implement the option for the user to select a custom time period instead of the default 10 years.

To further optimize the performance of the simulator, I want to create a backend to store information that has already been called in previous axios calls.

Also putting the data file in the backend would be great. 
#### Contributors


 Special thanks to Edward Baafi for his wonderful suggestions, you rock!


*Happy Hacking!*