import Results from "../Results/Results";
import axios from "axios";
import { useState } from "react";
import { mean, variance, std, covariance, re } from 'mathjs'
import { Link, useNavigate } from 'react-router-dom';
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


function Indexes({ mD, sD, setDM, setDS, mS, sS, setSM, setSS, mean, setMean, risk, setRisk, indexName, setIndexName }) {


    const [pricesD, setPricesD] = useState([]);
    const [Dv, setDV] = useState([]);
    const [fullArrayD, setFullArrayD] = useState([]);
    const [reverseD, setReverseD] = useState([]);


    const [pricesS, setPricesS] = useState([]);
    const [Sv, setSV] = useState([]);
    const [fullArrayS, setFullArrayS] = useState([]);
    const [reverseS, setReverseS] = useState([]);





    const url = 'https://api.twelvedata.com/';
    const text = '?symbol='
    const dow = 'DIA'
    const keyText = '&apikey='
    const key = 'c3617d0506fd466d9401ac352b69f038';
    const html = 'avgprice'
    const datarange1 = `&interval=1month&outputsize=192&`

    const code = url + html + text + dow + datarange1 + keyText + key
    console.log(code)
    const handleButtonClick = () => {

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


                setDM((average)*100);

                // setDM(mean(newArrayD));
                // console.log(setDM)

                setDV(variance(teste)*100);
                console.log(setDV);

                setDS(std(teste)*100);
                console.log(setDS);

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


                setSM((average)*100);

                // setDM(mean(newArrayD));
                // console.log(setDM)

                setSV(variance(teste2)*100);
                console.log(setSV);

                setSS(std(teste2)*100);
                console.log(setSS);

            })
    };

    console.log(mD)
    console.log(mS)
    console.log(sD)
    console.log(sS)
    /////USENAVIGATE
    ////SET STATE
    ///NAVIGATE

    const navigate = useNavigate();


    const handleButton1Click = () => {
        const indexName= "DOW JONES"
        setIndexName(indexName)
        setMean(mD);
        setRisk(sD);
        console.log(`setMean1 is now ${mean}`);
        navigate('/');

    };

    const handleButton2Click = () => {
        const indexName= "S&P 500"
        setIndexName(indexName)
        setMean(mS); 
        setRisk(sD);
        console.log(`setMean2 is now ${mean}`);
        navigate('/');

    };





    return (
        <>
            <Link to="/">

                <button onClick={handleButton1Click}>CHOOSE DOW JONES</button>

                </Link>

                <Link to="/">

                    <button onClick={handleButton2Click}>CHOOSE S&P500</button>
                </Link>


                <button className="button" onClick={handleButtonClick}>Submit</button>
                <div className="etf">
                    <div className="indexes">
                        <section className="card">
                            <Index1 />
                            <div className="graph">
                                <h3 className="graph__title" style={{ color: "#black", marginBottom: "1rem" }}>Average Price Over Time</h3>

                                <LineChart
                                    width={450}
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
                        </section>
                    </div>


                    <div className="indexes">
                        <section className="card">
                            <Index2 />
                            <div className="graph">
                                <h3 className="graph__title" style={{ color: "#black", marginBottom: "1rem" }}>Average Price Over Time</h3>

                                <LineChart
                                    width={450}
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
                            </div>
                        </section>
                    </div>
                </div>



            </>
            );
}

            export default Indexes;


// spy - s&p500