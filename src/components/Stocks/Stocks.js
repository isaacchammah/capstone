import Stock1 from "../Stock1/Stock1";
import axios from "axios";
import { useState } from "react";
import { mean, variance, std } from 'mathjs'
import "./Stocks.scss"
import Stock2 from "../Stock2/Stock2";
import Stock3 from "../Stock3/Stock3";
import number2 from "../../assets/Images/number 2.webp";
import riskreturn from "../../assets/Images/risk return.gif";
import Swal from "sweetalert2";
import { Link } from 'react-scroll';
import data from "../../data/data.json"
import Modal from "../Modal/Modal";

function Stocks({ setLogo1, setM1, setS1, logo1, m1, s1, setDescription1,
    setLogo2, setM2, setS2, logo2, m2, s2, setDescription2,
    setLogo3, setM3, setS3, logo3, m3, s3, setDescription3,
    setStockPortfolioRisk, setStockPortfolioMean,
    setShowResults, pName
}) {

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
    const [newArray3, setNewArray3] = useState([]);

    //filter
    const [filter, setFilter] = useState('');

    //modal
    const [isOpen, setIsOpen] = useState(false);

    //filter
    const maxDisplayedItems = 10;

    const filteredData = data.filter(
        (item) =>
            item.symbol.toLowerCase().includes(filter.toLowerCase()) ||
            item.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    //modal
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };



    const handleButtonClick1 = () => {

        //select stocks button

        //stock1
        setShowTable1(true);

        const url = 'https://api.twelvedata.com/';
        const html1 = 'profile'
        const text = '?symbol='
        const keyText = '&apikey='
        const key = 'c3617d0506fd466d9401ac352b69f038';
        const code11 = url + html1 + text + symbolInput1 + keyText + key

        // name, industry, website, description
        axios.get(code11)
            .then(response => {
                setProfile1(response.data);
            },)

        // name
        axios.get(code11)
            .then(response => {
                setDescription1(response.data.name);
            },)

        // logo
        const html2 = 'logo'
        const code12 = url + html2 + text + symbolInput1 + keyText + key

        axios.get(code12)
            .then(response => {
                setLogo1(response.data.url);
            },)

        // income statment
        const html3 = 'income_statement'
        const code13 = url + html3 + text + symbolInput1 + keyText + key
        axios.get(code13)
            .then(response => {
                setIncomeStatement1(response.data.income_statement.reverse());
            },)

        // balancesheet
        const html4 = 'balance_sheet'
        const code14 = url + html4 + text + symbolInput1 + keyText + key
        axios.get(code14)
            .then(response => {
                setBalanceSheet1(response.data.balance_sheet.reverse());
            },)

        //avarage price for the past 120 months 
        const html5 = 'avgprice'
        const datarange = `&interval=1month&outputsize=120&`
        const code15 = url + html5 + text + symbolInput1 + datarange + keyText + key

        axios.get(code15)
            .then(response => {

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

                ;
                //mean
                setM1(mean(newArray1) * 100);

                //variance
                setV1(variance(newArray1));

                //standard deviation 
                setS1(std(newArray1) * 100);


                //array with the stock returs 
                setNewArray1(newArray1)
            })

            console.log(code11, code12, code13, code14, code15)

        //stock2
        setShowTable2(true);

        const code21 = url + html1 + text + symbolInput3 + keyText + key

        // name, industry, website, description
        axios.get(code21)
            .then(response => {
                setProfile2(response.data);
            },)

        // name
        axios.get(code21)
            .then(response => {
                setDescription2(response.data.name);
            },)

        const code22 = url + html2 + text + symbolInput3 + keyText + key

        // logo
        axios.get(code22)
            .then(response => {
                setLogo2(response.data.url);
            },)

        // income statment
        const code23 = url + html3 + text + symbolInput3 + keyText + key
        axios.get(code23)
            .then(response => {
                setIncomeStatement2(response.data.income_statement.reverse());
            },)

        const code24 = url + html4 + text + symbolInput3 + keyText + key

        // balancesheet
        axios.get(code24)
            .then(response => {
                setBalanceSheet2(response.data.balance_sheet.reverse());
            },)

        const code25 = url + html5 + text + symbolInput3 + datarange + keyText + key

        //avarage price for the past 120 months 
        axios.get(code25)
            .then(response => {
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

                ;

                //mean
                setM2(mean(newArray2) * 100);

                //variance
                setV2(variance(newArray2));

                //standard deviation 
                setS2(std(newArray2) * 100);

                //array with the stock returs 
                setNewArray2(newArray2)

            });

        //stock3
        setShowTable3(true);

        const code31 = url + html1 + text + symbolInput5 + keyText + key

        // name, industry, website, description
        axios.get(code31)
            .then(response => {
                setProfile3(response.data);
            },)
        //name
        axios.get(code31)
            .then(response => {
                setDescription3(response.data.name);
            },)

        const code32 = url + html2 + text + symbolInput5 + keyText + key
        // logo
        axios.get(code32)
            .then(response => {
                setLogo3(response.data.url);
            },)
        // income statment
        const code33 = url + html3 + text + symbolInput5 + keyText + key
        axios.get(code33)
            .then(response => {
                setIncomeStatement3(response.data.income_statement.reverse());
            },)

        const code34 = url + html4 + text + symbolInput5 + keyText + key
        // balancesheet
        axios.get(code34)
            .then(response => {
                setBalanceSheet3(response.data.balance_sheet.reverse());
            },)

        const code35 = url + html5 + text + symbolInput5 + datarange + keyText + key

        //avarage price for the past 120 months 
        axios.get(code35)
            .then(response => {
                setPrices3(response.data.values);

                const reversedArray = response.data.values.slice().reverse(); // Create a reversed copy of the array
                const newArray3 = reversedArray.reduce((acc, price, index, array) => {
                    if (index !== 0) {
                        const prevPrice = array[index - 1].avgprice;
                        const currPrice = price.avgprice;
                        const returnVal = (currPrice - prevPrice) / prevPrice;
                        acc.push(returnVal);
                    }
                    return acc;
                }, []);

                ;

                //mean
                setM3(mean(newArray3) * 100);

                //variance
                setV3(variance(newArray3));

                //standard deviation 
                setS3(std(newArray3) * 100);

                //array with the stock returs 
                setNewArray3(newArray3)

            });

    };

    const handleButtonClickWeights = () => {

        //create my portfolio button
        const sum = parseInt(symbolInput2) + parseInt(symbolInput4) + parseInt(symbolInput6);

        //alert, the sum of the % must =100
        if (sum !== 100) {
            alert("The sum of the values in the inputs must be equal to 100.");
            return;
        }

        //portfolio mean
        const pMean = ((m1 * parseFloat(symbolInput2) + m2 * parseFloat(symbolInput4) + m3 * parseFloat(symbolInput6)) / 100)

        setStockPortfolioMean(pMean)

        //correlations between stocks
        const calculateCorrelation = require("calculate-correlation");

        const correlation12 = calculateCorrelation(newArray1, newArray2)

        const correlation13 = calculateCorrelation(newArray1, newArray3)

        const correlation23 = calculateCorrelation(newArray2, newArray3)

        //portfolio standard deviation (calculated using the correlations between the stocks) 
        const pstandard = (
            ((parseFloat(symbolInput2) / 100) ** 2 * v1 +
                (parseFloat(symbolInput4) / 100) ** 2 * v2 +
                (parseFloat(symbolInput6) / 100) ** 2 * v3 +
                2 * ((parseFloat(symbolInput2) / 100) * (parseFloat(symbolInput4) / 100) * v1 ** 0.5 * v2 ** 0.5 * correlation12) +
                2 * ((parseFloat(symbolInput2) / 100) * (parseFloat(symbolInput6) / 100) * v1 ** 0.5 * v3 ** 0.5 * correlation13) +
                2 * ((parseFloat(symbolInput4) / 100) * (parseFloat(symbolInput6) / 100) * v2 ** 0.5 * v3 ** 0.5 * correlation23)) ** 0.5
        ) * 100;

        setStockPortfolioRisk(pstandard)

        setShowResults(true);

        //modal for image
        Swal.fire({
            title: 'Calculating your portfolio using the following formula:',
            html: '<img className="riskreturn" src="' + riskreturn + '" alt="risk-return" style="width: 450px; height: 98.719px; border-radius:10 " />',
            confirmButtonText: 'OK !',
            confirmButtonColor: 'black', // Change the color of the button here
        });
    }

    return (
        <>

            <div className="top-wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div id="stocks"></div>

            <div className="stocks-header">
                <img className="stocks-header__numbers" src={number2} alt='numer-two' />
                <p className="stocks__instruction">Select 3 stocks to create {pName}'s portfolio</p>
            </div>

            <div className="stockfilter">
                <h2>Stock Filter</h2>
                <input className="filter-input"
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                    placeholder="Filter by symbol or name"
                />

                {filter && filteredData.length > 0 ? (
                    <ul>
                        {filteredData.slice(0, maxDisplayedItems).map((item) => (
                            <div key={item.symbol}>
                                {item.name} - {item.symbol}
                            </div>
                        ))}
                        {filteredData.length > maxDisplayedItems && (
                            <h5>...and more</h5>
                        )}
                    </ul>
                ) : null}
                {filter && filteredData.length === 0 && <p>No matching stocks found.</p>}
            </div>

            <div className="tickers">
                <input className="tickers__input" type="text" id="symbol" name="symbol" placeholder="Ticker 1" value={symbolInput1} onChange={(e) => setSymbolInput1(e.target.value)} />
                <input className="tickers__input" type="text" id="symbol" name="symbol" placeholder="Ticker 2" value={symbolInput3} onChange={(e) => setSymbolInput3(e.target.value)} />
                <input className="tickers__input" type="text" id="symbol" name="symbol" placeholder="Ticker 3" value={symbolInput5} onChange={(e) => setSymbolInput5(e.target.value)} />
            </div>

            <div>   <button className="stock-button" onClick={handleButtonClick1}>Select stocks</button></div>

            <div className="stocks-cards">
                <div className="stocks-cards__stock1">
                    <div>
                        {newArray1.length === 0 || newArray1.length === 119 ? null : (
                            <div className="stocks-card__error-message">
                                <p className="stocks-card__error-message1">This stock has been in the market for less than 10 years.</p>
                                <p className="tocks-card__error-message2">Please select another stock.</p>
                            </div>
                        )}
                    </div>

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

                <div className="stocks-cards__stock2">
                    <div>
                        {newArray2.length === 0 || newArray2.length === 119 ? null : (
                            <div className="stocks-card__error-message">
                                <p className="stocks-card__error-message1">This stock has been in the market for less than 10 years.</p>
                                <p className="tocks-card__error-message2">Please select another stock.</p>
                            </div>
                        )}
                    </div>

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

                <div className="stocks-cards__stock3">
                    <div>
                        {newArray3.length === 0 || newArray3.length === 119 ? null : (
                            <div className="stocks-card__error-message">
                                <p className="stocks-card__error-message1">This stock has been in the market for less than 10 years.</p>
                                <p className="tocks-card__error-message2">Please select another stock.</p>
                            </div>
                        )}
                    </div>

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

            </div >

            <div>
                <button className="modal-button" onClick={openModal}>What are these numbers?</button>
                <Modal isOpen={isOpen} onClose={closeModal} />
            </div>

            <h3 className="stock-weights" >Now, select the % you want to invest in each stock - it must add up to 100</h3>

            <div className="stock-weights__inputs">
                <input className="stock-weights__input" type="text" id="symbol" name="symbol" value={symbolInput2} placeholder=" % Weight stock 1" onChange={(e) => setSymbolInput2(e.target.value)} />
                <input className="stock-weights__input" type="text" id="symbol" name="symbol" value={symbolInput4} placeholder="% Weight stock 2" onChange={(e) => setSymbolInput4(e.target.value)} />
                <input className="stock-weights__input" type="text" id="symbol" name="symbol" placeholder=" % Weight stock 3" value={symbolInput6} onChange={(e) => setSymbolInput6(e.target.value)} />
            </div>

            <div>
                <Link to="results" smooth={true} >
                    <button className="stock-button " onClick={handleButtonClickWeights}>

                        Create my portfolio
                    </button>
                </Link>

            </div>
            <div className="custom-shape-divider-bottom-1684027880">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
        </>
    );
}

export default Stocks;

