import Results from "../Results/Results";
import axios from "axios";
import { useState } from "react";
import { mean, variance, std, covariance, re } from 'mathjs'
import { Link } from 'react-router-dom';
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








function Indexes({ mD, sD, setDM, setDS }) {


    const [pricesD, setPricesD] = useState([]);
    const [Dv, setDV] = useState([]);
    const [fullArrayD, setFullArrayD] = useState([]);
    const [reverse, setReverse] = useState([]);





    const url = 'https://api.twelvedata.com/';
    const text = '?symbol='
    const dow = 'DIA'
    const keyText = '&apikey='
    const key = 'c3617d0506fd466d9401ac352b69f038';
    const html = 'avgprice'
    const datarange1 = `&interval=1month&outputsize=190&`

    const code = url + html + text + dow + datarange1 + keyText + key
    console.log(code)
    const handleButtonClick = () => {

        axios.get(code)
            .then(response => {
                console.log(response.data.values);
                setPricesD(response.data.values);
                setReverse(response.data.values.slice().reverse());






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


                setDM(average);

                // setDM(mean(newArrayD));
                // console.log(setDM)

                setDV(variance(newArrayD));
                console.log(setDV);

                setDS(std(newArrayD));
                console.log(setDS);

            })
    };
    console.log(mD)

    return (
        <>
            <button className="button" onClick={handleButtonClick}>Submit</button>

            <section className="card">
                <Index1 />
                <LineChart
                    width={500}
                    height={300}
                    data={reverse}
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
                    <XAxis dataKey="datetime" stroke="white" />
                    <YAxis domain={[100]} stroke="white" value="Points" position="insideLeft" />
                    <Tooltip />
                    <Legend />
                    <Line type="" dataKey="avgprice" stroke="#82ca9d" strokeWidth={3} dot={false} />
                </LineChart>
            </section>

        </>
    );
}

export default Indexes;


// spy - s&p500