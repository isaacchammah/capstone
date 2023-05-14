import Results from "../Results/Results";
import axios from "axios";
import React, { useState, useEffect  } from 'react';
import { mean, variance, std, covariance, re } from 'mathjs'
import { render } from "react-dom";
import { motion } from "framer-motion";
import ReactApexChart from "react-apexcharts";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import Index1 from "../../components/Index1/Index1";
import "../Indexes/Indexes.scss"
import Index2 from "../../components/Index2/Index2";
import number1 from "../../assets/Images/number 1.webp";
import Index3 from "../../components/Index3/Index3";
import wave2 from "../../assets/Images/waves 4.png";
import { Link } from 'react-scroll';









function Indexes({ mD, sD, setMD, setSD, mS, sS, setMS, setSS, mean, setMean, risk, setRisk, indexName, setIndexName, mN, setMN, sN, setSN,
    setShowStocks,
}) {

    //DOW
    const [pricesD, setPricesD] = useState([]);
    const [Dv, setDV] = useState([]);
    const [fullArrayD, setFullArrayD] = useState([]);
    const [reverseD, setReverseD] = useState([]);

    //S&P
    const [pricesS, setPricesS] = useState([]);
    const [Sv, setSV] = useState([]);
    const [fullArrayS, setFullArrayS] = useState([]);
    const [reverseS, setReverseS] = useState([]);

    // /NASDAQ

    const [pricesN, setPricesN] = useState([]);
    const [Nv, setNV] = useState([]);
    const [fullArrayN, setFullArrayN] = useState([]);
    const [reverseN, setReverseN] = useState([]);




    const url = 'https://api.twelvedata.com/';
    const text = '?symbol='
    const dow = 'DIA'
    const keyText = '&apikey='
    const key = 'c3617d0506fd466d9401ac352b69f038';
    const html = 'avgprice'
    const datarange1 = `&interval=1month&outputsize=192&`

    const code = url + html + text + dow + datarange1 + keyText + key
    console.log(code)

    useEffect(() => {

        axios.get(code)
            .then(response => {
                console.log(response.data.values);
                setPricesD(response.data.values);
                setReverseD(response.data.values.slice().reverse());

                const reversedArray = (response.data.values.slice().reverse()); // Create a reversed copy of the array
                const newArrayD = reversedArray.reduce((acc, price, index, array) => {
                    if (index !== 0) {
                        const prevPrice = array[index - 1].avgprice;
                        const currPrice = price.avgprice;
                        const returnVal = (currPrice - prevPrice) / prevPrice;
                        acc.push(returnVal);
                    }
                    return acc;
                }, []);

                console.log(newArrayD); // The new array containing the returns from the prices, with the first price being the most recent
                const teste = [...new Set(newArrayD)]
                console.log(teste)

                let sum = 0;
                for (let i = 0; i < teste.length; i++) {
                    sum += teste[i];
                }
                const average = sum / teste.length;


                setMD((average) * 100);

                // setDM(mean(newArrayD));
                // console.log(setDM)

                setDV(variance(teste) * 100);
                console.log(setDV);

                setSD(std(teste) * 100);
                console.log(setSD);

                ////////////////////////////////////////////////////
            })


        const sp = "ivv"


        const code2 = url + html + text + sp + datarange1 + keyText + key


        axios.get(code2)
            .then(response => {
                console.log(response.data.values);
                setPricesS(response.data.values);
                setReverseS(response.data.values.slice().reverse());

                const reversedArrayS = (response.data.values.slice().reverse()); // Create a reversed copy of the array
                const newArrayS = reversedArrayS.reduce((acc, price, index, array) => {
                    if (index !== 0) {
                        const prevPrice = array[index - 1].avgprice;
                        const currPrice = price.avgprice;
                        const returnVal = (currPrice - prevPrice) / prevPrice;
                        acc.push(returnVal);
                    }
                    return acc;
                }, []);

                console.log(newArrayS); // The new array containing the returns from the prices, with the first price being the most recent
                const teste2 = [...new Set(newArrayS)]
                console.log(teste2)

                let sum = 0;
                for (let i = 0; i < teste2.length; i++) {
                    sum += teste2[i];
                }
                const average = sum / teste2.length;


                setMS((average) * 100);

                // setDM(mean(newArrayD));
                // console.log(setDM)

                setSV(variance(teste2) * 100);
                console.log(setSV);

                setSS(std(teste2) * 100);
                console.log(setSS);

            })


        //////////NASDAQ
        const nas = "QQQ"

        const datarange2 = `&interval=1month&outputsize=120&`

        const code3 = url + html + text + nas + datarange2 + keyText + key


        axios.get(code3)
            .then(response => {
                console.log(response.data.values);
                setPricesN(response.data.values);
                setReverseN(response.data.values.slice().reverse());

                const reversedArrayN = (response.data.values.slice().reverse()); // Create a reversed copy of the array
                const newArrayN = reversedArrayN.reduce((acc, price, index, array) => {
                    if (index !== 0) {
                        const prevPrice = array[index - 1].avgprice;
                        const currPrice = price.avgprice;
                        const returnVal = (currPrice - prevPrice) / prevPrice;
                        acc.push(returnVal);
                    }
                    return acc;
                }, []);

                console.log(newArrayN); // The new array containing the returns from the prices, with the first price being the most recent
                const teste2 = [...new Set(newArrayN)]
                console.log(teste2)

                let sum = 0;
                for (let i = 0; i < teste2.length; i++) {
                    sum += teste2[i];
                }
                const average = sum / teste2.length;


                setMN((average) * 100);

                // setDM(mean(newArrayD));
                // console.log(setDM)

                setNV(variance(teste2) * 100);
                console.log(setNV);

                setSN(std(teste2) * 100);
                console.log(setSN);

            })


    }, []);

    ///////////////

    console.log(mD)
    console.log(mS)
    console.log(sD)
    console.log(sS)
    /////USENAVIGATE
    ////SET STATE
    ///NAVIGATE

  


    const handleButton1Click = () => {

        const indexName = "DOW JONES"
        setIndexName(indexName)
        setMean(mD);
        setRisk(sD);
        console.log(`setMean1 is now ${mean}`);

        setShowStocks(true);

        

    };




    const handleButton2Click = () => {
        const indexName = "S&P 500"
        setIndexName(indexName)
        setMean(mS);
        setRisk(sS);
        console.log(`setMean2 is now ${mean}`);

        setShowStocks(true);

     


    };

    const handleButton3Click = () => {
        const indexName = "NASDAQ"
        setIndexName(indexName)
        setMean(mN);
        setRisk(sN);
        console.log(`setMean2 is now ${mean}`)

        setShowStocks(true);

      


    };





    return (
        <>
            <div className="index-page">


                <div className="info" id="indexes">
                    <img className="number" src={number1} alt='numer-one' />
                    <p className="instruction">Select the market index you intend to beat</p>
                </div>
                <div className="etf">

                    <div className="indexes">

                        <section className="card">
                            <Index1 />

                            <div className="graph-button">

                                <div className="graph">
                                    <h3 className="graph__title" style={{ color: "#black", marginBottom: "1rem" }}>Average Price Over Time</h3>

                                    <LineChart
                                        width={400}
                                        height={200}
                                        data={reverseD}
                                        style={{ backgroundColor: "black" }}

                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5
                                        }}
                                        animationDuration={100000} // set animation duration to 1000ms (1 second)

                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="datetime" stroke="white"
                                            label={{ value: 'Date', angle: 0, position: 'insideBottomRight', fill: '#2E66E5', offset: -10 }}
                                        />
                                        <YAxis domain={[0, 'dataMax']}
                                            tickFormatter={(tick) => tick.toLocaleString(undefined, { maximumFractionDigits: 0 }) * 100}
                                            stroke="white" value="Points" position="insideLeft"
                                            label={{ value: 'Points', angle: -90, position: 'insideLeft', fill: '#2E66E5', offset: -8 }}
                                        />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="" dataKey="avgprice" stroke="#2E66E5" strokeWidth={3} dot={false} />
                                    </LineChart>
                                </div>

                                <div >

                                    <Link to="stocks" smooth={true} >
                                        <button className="button-855"  onClick={handleButton1Click}>SELECT DOW JONES</button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>


                    <div className="indexes">
                        <section className="card">
                            <Index2 />

                            <div className="graph-button">

                                <div className="graph">
                                    <h3 className="graph__title" style={{ color: "#black", marginBottom: "1rem" }}>Average Price Over Time</h3>

                                    <LineChart
                                        width={400}
                                        height={200}
                                        data={reverseS}
                                        style={{ backgroundColor: "black" }}

                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5
                                        }}
                                        animationDuration={100000} // set animation duration to 1000ms (1 second)

                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="datetime" stroke="white"
                                            label={{ value: 'Date', angle: 0, position: 'insideBottomRight', fill: '#2E66E5', offset: -10 }}
                                        />
                                        <YAxis domain={[0, 'dataMax']}
                                            tickFormatter={(tick) => tick.toLocaleString(undefined, { maximumFractionDigits: 0 }) * 10}
                                            stroke="white" value="Points" position="insideLeft"
                                            label={{ value: 'Points', angle: -90, position: 'insideLeft', fill: '#2E66E5', offset: -8 }}
                                        />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="" dataKey="avgprice" stroke="#2E66E5" strokeWidth={3} dot={false} />
                                    </LineChart>
                                    <div className="button-85-container">

                                        <Link to="stocks" smooth={true}>
                                            <button className="button-855" onClick={handleButton2Click}>SELECT S&P500</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>


                    <div className="indexes">
                        <section className="card">
                            <Index3 />
                            <div className="graph-button">

                                <div className="graph">
                                    <h3 className="graph__title" style={{ color: "#black", marginBottom: "1rem" }}>Average Price Over Time</h3>

                                    <LineChart
                                        width={400}
                                        height={200}
                                        data={reverseN}
                                        style={{ backgroundColor: "black" }}

                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5
                                        }}
                                        animationDuration={100000} // set animation duration to 1000ms (1 second)

                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="datetime" stroke="white"
                                            label={{ value: 'Date', angle: 0, position: 'insideBottomRight', fill: '#2E66E5', offset: -10 }}
                                        />
                                        <YAxis domain={[0, 400]}
                                            tickFormatter={(tick) => tick.toLocaleString(undefined, { maximumFractionDigits: 0 }) * 37.4
                                            }
                                            stroke="white" value="Points" position="insideLeft"
                                            label={{ value: 'Points', angle: -90, position: 'insideLeft', fill: '#2E66E5', offset: -8 }}
                                        />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="" dataKey="avgprice" stroke="#2E66E5" strokeWidth={3} dot={false} />
                                    </LineChart>
                                    <div className="button-85-container">

                                        <Link to="stocks" smooth={true}>
                                            <button className="button-855" onClick={handleButton3Click}>SELECT NASDAQ</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>


                </div>

            </div>

            <div class="custom-shape-divider-bottom-1684027880">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>

        </>
    );
}

export default Indexes;


// spy - s&p500