    ## Can you beat the market?

The financial simulator that allows you to select a market index and create a portfolio of three stocks. It uses data from the past 10 years to help you determine if your portfolio has outperformed the market.

*the project is an React project forked from `create-react-app`*

#### Development Environment

Give information about how to prepare a development environment for your coolest project.


*Aftero opening the file you have to run:*

*`npm install`*

#### Available Scripts

*In the project directory, you can run:*

### *`npm start`*

*Runs the app in the development mode.<br  />*

*Open [http://localhost:3000](http://localhost:3000) to view it in the browser.*

*You will also see any lint errors in the console.*

#### Dependencies

The project utilizes several libraries and APIs to provide a seamless user experience:

ApexCharts is used to create the scatterplot graph on the last page of the project.
Axios is used to make API calls to retrieve information about the ETFs and stocks. The TwelveData API is used for all API calls.
React-Scroll is used to smoothly scroll to a specific ID when a button is clicked.
Swal is used to create a modal that appears between the Stocks and Results pages.
Mathjs is used to calculate the mean, standard deviation, and variance of the ETFs and stocks.
Recharts is used to create the line charts for the ETFs.
React-Icons/FA is used to display a scroll-to-top icon in the bottom right corner of the screen.
Calculate-Correlation is used to calculate the correlation between the stocks once the weights have been determined.

#### Additional Sections

The project consists of a single page divided into four sections. Each section becomes available when the user clicks on the corresponding lower button.

1- The Home section provides instructions on how to use the simulator. 

2- In the Indexes section, users can learn about major market indexes and their workings. They can select one of these indexes and receive real-life information about its prices. The selected index becomes the benchmark against which the user’s portfolio will be measured.

3- In the Stocks section, users can choose three stocks and the percentage of their portfolio they wish to invest in each. They will receive basic information about the companies and can use the provided filter if they don’t know the name of a company. An alert message will appear if the weights don’t add up to 100. Only stocks that have been in the market for at least 10 years can be used in this simulator. If the user selects a stock that has been in the market for less than 10 years, an error message will appear, prompting them to select another stock.  If the user is unfamiliar with the accounting indexes, they can click on the “What are these numbers?” button, and a modal will appear on the screen with a table showing the formula and usefulness of the indexes.

The portfolio’s expected return, variance, and standard deviation will be calculated using the following formulas:

Expected Return of the Portfolio:
E(Rp) = wa * ra + wb * rb + wc * rc

Variance of the Portfolio:
Var(Rp) = wa^2 * Var(ra) + wb^2 * Var(rb) + wc^2 * Var(rc) + 2 * wa * wb * Cov(ra, rb) + 2 * wa * wc * Cov(ra, rc) + 2 * wb * wc * Cov(rb, rc)

Standard Deviation of the Portfolio:
σp = sqrt(Var(Rp))

In these formulas, “w” represents the weight invested in each stock, “r” represents the monthly return of the stock in the last 10 years, and “cov(r,r)” represents the covariance between the two assets.

4- In the Results section, users can compare the performance of their portfolio against the market index they had previously chosen. They will receive a clear message indicating whether they were able to beat the market or not. The results are presented in a user-friendly way, with a colorful scatterplot graph and a table that allows users to easily visualize and understand their performance.

#### Contributors

Mention the contributors

 Special thanks to Edward Baafi for his wonderful sugestions. 


*Happy Hacking!*