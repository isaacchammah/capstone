import Stock1 from "../../components/Stock1/Stock1";
import axios from "axios";
import { useState, useEffect } from "react";
import { mean, variance, std, covariance } from 'mathjs'
import { Link } from 'react-router-dom';
import "../Stocks/Stocks.scss"
import Stock2 from "../../components/Stock2/Stock2";
import Stock3 from "../../components/Stock3/Stock3";


// import covariance from "compute-covariance/lib";

function Stocks({ setLogo1, setM1, setS1, logo1, m1, s1, setDescription1,
    setLogo2, setM2, setS2, logo2, m2, s2, setDescription2,
    setLogo3, setM3, setS3, logo3, m3, s3, setDescription3 }) {


    // const [symbol, setSymbol] = useState([]);
    // const [NewArray, setNewArray] = useState([]);
    // const [NewArray2, setNewArray2] = useState([]);
    // const [symbol2, setSymbol2] = useState([]);
    // const [fullArray2, setFullArray2] = useState([]);


    // data from Stock1
    const [symbolInput1, setSymbolInput1] = useState('');
    const [symbolInput2, setSymbolInput2] = useState('');
    const [showTable1, setShowTable1] = useState(false);
    const [profile1, setProfile1] = useState([]);
    const [incomestatement1, setIncomeStatement1] = useState([]);
    const [balancesheet1, setBalanceSheet1] = useState([]);
    const [prices1, setPrices1] = useState([]);
    const [v1, setV1] = useState([]);
    const [newArray1, setNewArray1] = useState([]);


    // data from Stock2
    const [symbolInput3, setSymbolInput3] = useState('');
    const [symbolInput4, setSymbolInput4] = useState('');
    const [showTable2, setShowTable2] = useState(false);
    const [profile2, setProfile2] = useState([]);
    const [incomestatement2, setIncomeStatement2] = useState([]);
    const [balancesheet2, setBalanceSheet2] = useState([]);
    const [prices2, setPrices2] = useState([]);
    const [v2, setV2] = useState([]);
    const [newArray2, setNewArray2] = useState([]);


    // data from Stock3
    const [symbolInput5, setSymbolInput5] = useState('');
    const [symbolInput6, setSymbolInput6] = useState('');
    const [showTable3, setShowTable3] = useState(false);
    const [profile3, setProfile3] = useState([]);
    const [incomestatement3, setIncomeStatement3] = useState([]);
    const [balancesheet3, setBalanceSheet3] = useState([]);
    const [prices3, setPrices3] = useState([]);
    const [v3, setV3] = useState([]);





    const handleButtonClick1 = () => {

        setShowTable1(true);



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


        axios.get(code1)
            .then(response => {
                console.log(response.data.name);
                setDescription1(response.data.name);
            },)

        const html2 = 'logo'
        const code2 = url + html2 + text + symbolInput1 + keyText + key

        axios.get(code2)
            .then(response => {
                console.log(response.data.url);
                setLogo1(response.data.url);
            },)

        const html3 = 'income_statement'
        const code3 = url + html3 + text + symbolInput1 + keyText + key
        console.log(code3)
        axios.get(code3)
            .then(response => {
                console.log(response.data.income_statement);
                setIncomeStatement1(response.data.income_statement.reverse());
            },)

        const html4 = 'balance_sheet'
        const code4 = url + html4 + text + symbolInput1 + keyText + key

        axios.get(code4)
            .then(response => {
                console.log(response.data.balance_sheet);
                setBalanceSheet1(response.data.balance_sheet.reverse());
                console.log(setBalanceSheet1)
            },)

        const html5 = 'avgprice'
        const datarange = `&interval=1month&outputsize=120&`
        const code5 = url + html5 + text + symbolInput1 + datarange + keyText + key

        axios.get(code5)
            .then(response => {
                console.log(response.data.values);
                setPrices1(response.data.values);

                const reversedArray = response.data.values.slice().reverse(); // Create a reversed copy of the array
                const newArray1 = reversedArray.reduce((acc, price, index, array) => {
                    if (index !== 0) {
                        const prevPrice = array[index - 1].avgprice;
                        const currPrice = price.avgprice;
                        const returnVal = (currPrice - prevPrice) / prevPrice;
                        acc.push(returnVal);
                    }
                    return acc;
                }, []);

                console.log(newArray1); // The new array containing the returns from the prices, with the first price being the most recent
                ;

                setM1(mean(newArray1) * 100
                    // * parseFloat(symbolInput2)
                );
                console.log(setM1)

                setV1(variance(newArray1));
                console.log(setV1);

                setS1(std(newArray1) * 100);
                console.log(setS1);


setNewArray1(newArray1)

//////////////////////////////////////
setShowTable2(true);

const url = 'https://api.twelvedata.com/'
const html1 = 'profile'
const text = '?symbol='
const keyText = '&apikey='
const key = 'c3617d0506fd466d9401ac352b69f038';
const code1 = url + html1 + text + symbolInput3 + keyText + key

axios.get(code1)
    .then(response => {
        console.log(response.data);
        setProfile2(response.data);
    },)

axios.get(code1)
    .then(response => {
        console.log(response.data.name);
        setDescription2(response.data.name);
    },)

const html2 = 'logo'
const code2 = url + html2 + text + symbolInput3 + keyText + key

axios.get(code2)
    .then(response => {
        console.log(response.data.url);
        setLogo2(response.data.url);
    },)

const html3 = 'income_statement'
const code3 = url + html3 + text + symbolInput3 + keyText + key
console.log(code3)
axios.get(code3)
    .then(response => {
        console.log(response.data.income_statement);
        setIncomeStatement2(response.data.income_statement.reverse());
    },)

const html4 = 'balance_sheet'
const code4 = url + html4 + text + symbolInput3 + keyText + key

axios.get(code4)
    .then(response => {
        console.log(response.data.balance_sheet);
        setBalanceSheet2(response.data.balance_sheet.reverse());
        console.log(setBalanceSheet1)
    },)

const html5 = 'avgprice'
const datarange = `&interval=1month&outputsize=120&`
const code5 = url + html5 + text + symbolInput3 + datarange + keyText + key

axios.get(code5)
    .then(response => {
        console.log(response.data.values);
        setPrices2(response.data.values);

        const reversedArray = response.data.values.slice().reverse(); // Create a reversed copy of the array
        const newArray2 = reversedArray.reduce((acc, price, index, array) => {
            if (index !== 0) {
                const prevPrice = array[index - 1].avgprice;
                const currPrice = price.avgprice;
                const returnVal = (currPrice - prevPrice) / prevPrice;
                acc.push(returnVal);
            }
            return acc;
        }, []);

        console.log(newArray2); // The new array containing the returns from the prices, with the first price being the most recent
        ;


        setM2(mean(newArray2) * 100
            // * parseFloat(symbolInput4)
        );
        console.log(setM2)

        setV2(variance(newArray2));
        console.log(setV2);

        setS2(std(newArray2) * 100);
        console.log(setS2);

        setNewArray2(newArray2)



    });


            });
    };



    const handleButtonClick2 = () => {

   

    }


    const handleButtonClick3 = () => {

        setShowTable3(true);

        const url = 'https://api.twelvedata.com/'
        const html1 = 'profile'
        const text = '?symbol='
        const keyText = '&apikey='
        const key = 'c3617d0506fd466d9401ac352b69f038';
        const code1 = url + html1 + text + symbolInput5 + keyText + key

        axios.get(code1)
            .then(response => {
                console.log(response.data);
                setProfile3(response.data);
            },)

        axios.get(code1)
            .then(response => {
                console.log(response.data.name);
                setDescription3(response.data.name);
            },)

        const html2 = 'logo'
        const code2 = url + html2 + text + symbolInput5 + keyText + key

        axios.get(code2)
            .then(response => {
                console.log(response.data.url);
                setLogo3(response.data.url);
            },)

        const html3 = 'income_statement'
        const code3 = url + html3 + text + symbolInput5 + keyText + key
        console.log(code3)
        axios.get(code3)
            .then(response => {
                console.log(response.data.income_statement);
                setIncomeStatement3(response.data.income_statement.reverse());
            },)

        const html4 = 'balance_sheet'
        const code4 = url + html4 + text + symbolInput5 + keyText + key

        axios.get(code4)
            .then(response => {
                console.log(response.data.balance_sheet);
                setBalanceSheet3(response.data.balance_sheet.reverse());
                console.log(setBalanceSheet1)
            },)

        const html5 = 'avgprice'
        const datarange = `&interval=1month&outputsize=120&`
        const code5 = url + html5 + text + symbolInput5 + datarange + keyText + key

        axios.get(code5)
            .then(response => {
                console.log(response.data.values);
                setPrices3(response.data.values);

                const reversedArray = response.data.values.slice().reverse(); // Create a reversed copy of the array
                const newArray = reversedArray.reduce((acc, price, index, array) => {
                    if (index !== 0) {
                        const prevPrice = array[index - 1].avgprice;
                        const currPrice = price.avgprice;
                        const returnVal = (currPrice - prevPrice) / prevPrice;
                        acc.push(returnVal);
                    }
                    return acc;
                }, []);

                console.log(newArray); // The new array containing the returns from the prices, with the first price being the most recent
                ;


                setM3(mean(newArray) * 100
                    // * parseFloat(symbolInput4)
                );
                console.log(setM3)

                setV3(variance(newArray));
                console.log(setV3);

                setS3(std(newArray) * 100);
                console.log(setS3);

            });

    }


    const pMean = m1 + m2

    const calculateCorrelation = require("calculate-correlation");

    const correlation = calculateCorrelation (newArray1, newArray2)


    console.log("this is the portfolio mean", pMean)

    console.log("this is the portfolio CORREL", correlation)





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



    return (
        <>








            <div className="stocks">

                <div className="Stock1">
                    <input className="stock-input" type="text" id="symbol" name="symbol" placeholder="Enter the stock ticker" value={symbolInput1} onChange={(e) => setSymbolInput1(e.target.value)} />

                    <input type="text" id="symbol" name="symbol" value={symbolInput2} onChange={(e) => setSymbolInput2(e.target.value)} />

                    <button className="button" onClick={handleButtonClick1}>Submit</button>

                    <Stock1
                        profile1={profile1}
                        logo1={logo1}
                        incomestatement1={incomestatement1}
                        balancesheet1={balancesheet1}
                        m1={m1}
                        s1={s1}
                        v1={v1}
                        showTable1={showTable1}
                    ></Stock1>
                </div>




                <div>
                    <input className="stock-input" type="text" id="symbol" name="symbol" placeholder="Enter the stock ticker" value={symbolInput3} onChange={(e) => setSymbolInput3(e.target.value)} />

                    <input type="text" id="symbol" name="symbol" value={symbolInput4} onChange={(e) => setSymbolInput4(e.target.value)} />

                    <button className="button" onClick={handleButtonClick2}>Submit</button>

                    <Stock2
                        profile2={profile2}
                        logo2={logo2}
                        incomestatement2={incomestatement2}
                        balancesheet2={balancesheet2}
                        m2={m2}
                        s2={s2}
                        v2={v2}
                        showTable2={showTable2}
                    ></Stock2>
                </div>
            </div >



            <div>
                <input className="stock-input" type="text" id="symbol" name="symbol" placeholder="Enter the stock ticker" value={symbolInput5} onChange={(e) => setSymbolInput5(e.target.value)} />

                <input type="text" id="symbol" name="symbol" value={symbolInput6} onChange={(e) => setSymbolInput6(e.target.value)} />

                <button className="button" onClick={handleButtonClick3}>Submit</button>

                <Stock3
                    profile3={profile3}
                    logo3={logo3}
                    incomestatement3={incomestatement3}
                    balancesheet3={balancesheet3}
                    m3={m3}
                    s3={s3}
                    v3={v3}
                    showTable3={showTable3}
                ></Stock3>
            </div>








            <Link to="/results">
                <button className="main-upload__button-space">
                    PUBLISH
                </button>
            </Link>
        </>
    );
}

export default Stocks;

