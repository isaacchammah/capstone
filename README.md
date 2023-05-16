https://apexcharts.com/react-chart-demos/scatter-charts/scatter-images/ - scatter plot graph
https://www.npmjs.com/package/compute-covariance - covariance
https://mathjs.org/docs/reference/functions/std.html -sd

CRIAR 3 INDICE
STYLE
MODAL
FUNCAO RISCO RETORNO COM 3 ACOES

.
  //   const [symbols, setSymbols] = useState([]);


    //   useEffect(() => {
    //     if (symbols.length === 0) {
    //       axios.get('https://api.twelvedata.com/stocks?source=docs&country=united_states')
    //         .then(response => {
    //           const symbols = response.data.data.map(stock => ({ symbol: stock.symbol, name:stock.name}));
    //           console.log(symbols);
    //           setSymbols(symbols);
    //         });
    //     }
    //   }, [symbols]);





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


The project used the following dependencies: 

apexcharts -  used to create the graph in the last page of the propject 
axios - making calls to get the indofmation from the etfs and from the stocks. The twelvedata API was used to make all the calls
react-scroll - scroll to a certain id when a button is clicked
Swal - used to create a modal
mathjs - used to calculate the mean, standard deveation and varience of the etfs and stocks
recharts - used to create the line charts from the etfs
react-icons/fa -  used to scroll to the top icon in the bottom right corner of thw screen
calculate-correlation - used to calculate the correlation between the stocks once the weights have been determend 


#### Additional Sections

Tha project has 1 single page that is divided into 4 




#### Contributors

Mention the contributors

 

Finally, motivate the developer who will be working the coolest project with this PS:

*Happy Hacking!*