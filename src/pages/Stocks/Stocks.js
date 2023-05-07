import Stock1 from "../../components/Stock1/Stock1";
import Results from "../../components/Results/Results";
import axios from "axios";
import { useState } from "react";
import { mean, variance, std, covariance } from 'mathjs'
// import covariance from "compute-covariance/lib";

function Stocks() {

    const [symbolInput1, setSymbolInput1] = useState('');
    const [symbol, setSymbol] = useState([]);
    const [profile1, setProfile1] = useState([]);
    const [logo1, setLogo1] = useState([]);
    const [incomestatement1, setIncomeStatement1] = useState([]);
    const [balancesheet1, setBalanceSheet1] = useState([]);
    const [prices1, setPrices1] = useState([]);
    const [NewArray, setNewArray] = useState([]);
    const [m1, setM1] = useState();
    const [v1, setV1] = useState([]);
    const [s1, setS1] = useState([]);


    const [symbolInput2, setSymbolInput2] = useState('');
    const [prices2, setPrices2] = useState([]);
    const [m2, setM2] = useState();
    const [v2, setV2] = useState([]);
    const [s2, setS2] = useState([]);

    const [fullArray2, setFullArray2] = useState([]);




    const handleButtonClick = () => {


        // axios.get('https://api.twelvedata.com/stocks')
        //     .then(response => {
        //         console.log(response.data);
        //         setSymbol(response.data);

        //         // const dataArray = Object.values(response.data);
        //         // const usStocks = dataArray.filter(stock => stock.country === "United States").map(stock => ({
        //         //   symbol: stock.symbol
        //         // }));
        //         // console.log(usStocks);
        //     });

        const url = 'https://api.twelvedata.com/';
        const html1 = 'profile'
        const text = '?symbol='
        const keyText = '&apikey='
        const key = 'c3617d0506fd466d9401ac352b69f038';
        const code1 = url + html1 + text + symbolInput1 + keyText + key

        axios.get(code1)
            .then(response => {
                console.log(response.data);
                setProfile1(response.data);
            },)

        const html2 = 'logo'
        const code2 = url + html2 + text + symbolInput1 + keyText + key

        axios.get(code2)
            .then(response => {
                console.log(response.data);
                setLogo1(response.data);
            },)

        // const html3 = 'income_statement'
        // const code3 = url + html3 + text + symbolInput1 + keyText + key
        // console.log(code3)
        // axios.get(code3)
        //     .then(response => {
        //         console.log(response.data.income_statement);
        //         setIncomeStatement1(response.data.income_statement);

        //     },)

        // const html4 = 'balance_sheet'
        // const code4 = url + html4 + text + symbolInput1 + keyText + key

        // axios.get(code4)
        //     .then(response => {
        //         console.log(response.data.balance_sheet);
        //         setBalanceSheet1(response.data.balance_sheet);

        //     },)

        const html5 = 'avgprice'
        const datarange = `&interval=1month&outputsize=120&`
        const code5 = url + html5 + text + symbolInput1 + datarange + keyText + key

        axios.get(code5)
            .then(response => {
                console.log(response.data.values);
                setPrices1(response.data.values);

                const newArray = response.data.values.reduce((acc, price, index, array) => {
                    if (index !== 0) {
                        const prevPrice = array[index - 1].avgprice;
                        const currPrice = price.avgprice;
                        const returnVal = (currPrice - prevPrice) / prevPrice;
                        acc.push(returnVal);
                    }
                    return acc;
                }, []);

                setM1(mean(newArray) * parseFloat(symbolInput2));
                console.log(setM1)

                setV1(variance(newArray));
                console.log(setV1);

                setS1(std(newArray));
                console.log(setS1);




            });




        const html6 = 'avgprice'
        const datarange1 = `&interval=1month&outputsize=120&`
        const code6 = url + html6 + text + 'dis' + datarange1 + keyText + key

        axios.get(code6)
            .then(response => {
                console.log(response.data.values);
                setPrices1(response.data.values);

                const newArray2 = response.data.values.reduce((acc, price, index, array) => {
                    if (index !== 0) {
                        const prevPrice = array[index - 1].avgprice;
                        const currPrice = price.avgprice;
                        const returnVal = (currPrice - prevPrice) / prevPrice;
                        acc.push(returnVal);
                    }
                    return acc;
                }, []);

                setFullArray2(newArray2)

                setM2(mean(newArray2));
                console.log(setM2)

                setV2(variance(newArray2));
                console.log(setV2);

                setS2(std(newArray2));
                console.log(setS2);

            });




    }


    return (
        <div className="">
            <Stock1
                profile1={profile1}
                logo1={logo1}
                incomestatement1={incomestatement1}
                balancesheet1={balancesheet1}
                m1={m1}
                s1={s1}
                v1={v1}
                m2={m2}
                s2={s2}
                v2={v2}
                fullArray2={fullArray2}
            ></Stock1>



            <div>

                <input type="text" id="symbol" name="symbol" value={symbolInput1} onChange={(e) => setSymbolInput1(e.target.value)} />

                <input type="text" id="symbol" name="symbol" value={symbolInput2} onChange={(e) => setSymbolInput2(e.target.value)} />


                <button className="button" onClick={handleButtonClick}>Submit</button>

            </div>

            <Results


            logo1={logo1}


            ></Results>

        </div >
    );
}

export default Stocks;

