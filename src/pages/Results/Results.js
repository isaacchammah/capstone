import React, { Component, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "../Results/Results.scss";
import number3 from "../../assets/Images/number 3.webp";



function Results({ logo1, description1, m1, s1, logo2, description2, m2, s2, logo3, description3, m3, s3, mean, risk, indexName, stockPortfolioMean, stockPortfoliRisk }) {

  const series = [
    {
      name: description1,
      data: [
        [s1, m1]
      ]
    },
    {
      name: description2,
      data: [
        [s2, m2]
      ]
    },
    {
      name: description3,
      data: [
        [s3, m3]
      ]
    },
    {
      name: indexName,
      data: [
        [risk, mean]

      ]
    },
    {
      name: "Your Portfloio",
      data: [
        [stockPortfoliRisk, stockPortfolioMean]

      ]
    }
  ];

  const options = {

    title: {
      text: 'VOLATILITY X RETURN',
      align: 'center',
      style: {
        fontSize: '24px',
        fontFamily: 'Arial',
        color: 'white',
      },

    },

    subtitle: {
      text: '(average monthly values over the last 10 years)',
      align: 'center',
      style: {
        fontSize: '16px',
        fontFamily: 'Arial',
        color: 'white',
      },
    },


    chart: {
      height: '100%', 
      sparkline: {
        enabled: false
      },
      width: '100%',
      type: 'scatter',
      animations: {
        enabled: true,

      },
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: true
      }
    },
    colors: ['GRAY', 'orange', 'RED', 'GREEN', 'PINK'],
    xaxis: {
      tickAmount: 5,
      min: 0,
      max: 20,
      style: {
        fontSize: '20px',
        fontFamily: 'Arial',
        color: 'WHITE',
      },
      title: {
        text: 'Volatility',
        style: {
          fontSize: '20px',
          fontFamily: 'Arial',
          color: 'WHITE',
        }
      },
      labels: {
        style: {
          colors: 'white',
          fontSize: '15px'
        },
        formatter: function (value) {
          return value + "%";
        },
      },
    },

    yaxis: {
      tickAmount: 5,
      title: {
        text: 'Return',
        style: {
          fontSize: '20px',
          fontFamily: 'Arial',
          color: 'white',
        },
      },
      labels: {
        
        style: {
          colors: ['white'],
          fontSize: '15px',
        },
        formatter: function (value) {
          return value.toFixed(2) + "%";
        },
      },
    },

    markers: {
      size: 30
    },


    fill: {
      type: 'image',
      opacity: 1,
      image: {
        src: [
          logo1,
          logo2,
          logo3,
          'https://colourlex.com/wp-content/uploads/2021/02/Emerald-green-painted-swatch-300x300.jpg.webp',
          'https://m.media-amazon.com/images/I/31mQDZK7HeL.__AC_SX300_SY300_QL70_FMwebp_.jpg'],
        width: 60,
        height: 60,
      }
    },

    legend: {
      labels: {
        useSeriesColors: true
      },
      markers: {
        customHTML: [
          function () {
            return ''
          },
          function () {
            return ''
          },
          function () {
            return ''
          },
          function () {
            return ''
          },
          function () {
            return ''
          }
        ]
      }
    }
  };


  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");


  useEffect(() => {

    if (stockPortfoliRisk < risk && stockPortfolioMean > mean) {
      setMessage("YOU BEAT THE MARKET!");
    } else if (stockPortfoliRisk > risk && stockPortfolioMean < mean) {
      setMessage("YOU DID NOT BEAT THE MARKET!");
    } else if (stockPortfoliRisk > risk && stockPortfolioMean > mean) {
      setMessage("YOU DID A GOOD JOB!");
    } else if (stockPortfoliRisk < risk && stockPortfolioMean < mean) {
      setMessage("YOU DID AN OK JOB!");
    }
  })


  useEffect(() => {

    if (stockPortfoliRisk < risk && stockPortfolioMean > mean) {
      setMessage2("As you can see above your portfolio had a return of" + " "
        + parseFloat(stockPortfolioMean).toFixed(2) + "%" + " " + "higher than the market's return of" + " " + parseFloat(mean).toFixed(2) + "%" +
        " " + "and your risk was" + " " + parseFloat(stockPortfoliRisk).toFixed(2) + "%" + " " + "lower than the market's volatility of " + " " + parseFloat(risk).toFixed(2) + " " + "%");
    } else if (stockPortfoliRisk > risk && stockPortfolioMean < mean) {
      setMessage2("As you can see above your portfolio had a return of" + " "
        + parseFloat(stockPortfolioMean).toFixed(2) + "%" + " " + "lower than the market's return of" + " " + parseFloat(mean).toFixed(2) + "%" +
        " " + "and your risk was" + " " + parseFloat(stockPortfoliRisk).toFixed(2) + "%" + " " + "higher than the market's volatility of " + " " + parseFloat(risk).toFixed(2) + " " + "%");
    } else if (stockPortfoliRisk > risk && stockPortfolioMean > mean) {
      setMessage2("As you can see above your portfolio had a return of" + " "
        + parseFloat(stockPortfolioMean).toFixed(2) + "%" + " " + "higher than the market's return of" + " " + parseFloat(mean).toFixed(2) + "%" +
        " " + "and your risk was" + " " + parseFloat(stockPortfoliRisk).toFixed(2) + "%" + " " + "higher than the market's volatility of " + " " + parseFloat(risk).toFixed(2) + " " + "%")
    }
    else if (stockPortfoliRisk < risk && stockPortfolioMean < mean) {
      setMessage2("As you can see above your portfolio had a return of" + " "
        + parseFloat(stockPortfolioMean).toFixed(2) + "%" + " " + "lower than the market's return of" + " " + parseFloat(mean).toFixed(2) + "%" +
        " " + "and your risk was" + " " + parseFloat(stockPortfoliRisk).toFixed(2) + "%" + " " + "lower than the market's volatility of " + " " + parseFloat(risk).toFixed(2) + " " + "%");
    }
  })


  return (
    <>
      <div class="custom-shape-divider-top-1684027924">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>


      <div className="info2" id="results">
        <img className="number" src={number3} alt='numer-one' />
        <p className="instruction">Did you beat the market?</p>
      </div>

      <div id="chart" className="chart">
        <ReactApexChart className="results-graph" options={options} series={series} type="scatter" height={550} width={1250} />
      </div>

      <h1 className="message">
        {message && <p>{message}</p>}
      </h1>

      <h2 className="message2">
        {message2 && <p>{message2}</p>}
      </h2>

      <div className="app2">
        <table className="table3">
          <tr className="table2">

            <th>
              <div className="results-wight">Assets/Values</div>
              <div className="results-wight">Volatility</div>
              <div className="results-wight">Return</div>

            </th>
          </tr>
          <tr>

            <td>
              <div className="results-wight">      {description1} </div>
              <div className="results-wight"> {parseFloat(s1).toFixed(2)}%</div>
              <div className="results-wight">{parseFloat(m1).toFixed(2)}%</div>
            </td>

            <td>
              <div className="results-wight">  {description2} </div>
              <div className="results-wight"> {parseFloat(s2).toFixed(2)}%</div>
              <div className="results-wight">{parseFloat(m2).toFixed(2)}%</div>
            </td>

            <td>
              <div className="results-wight">  {description3} </div>
              <div className="results-wight"> {parseFloat(s3).toFixed(2)}%</div>
              <div className="results-wight">{parseFloat(m3).toFixed(2)}%</div>
            </td>

            <td>
              <div className="results-wight">    {indexName} </div>
              <div className="results-wight"> {parseFloat(risk).toFixed(2)}%</div>
              <div className="results-wight">{parseFloat(mean).toFixed(2)}%</div>
            </td>

            <td>
              <div className="results-wight">   Your portfolio </div>
              <div className="results-wight">{parseFloat(stockPortfoliRisk).toFixed(2)}%</div>
              <div className="results-wight">{parseFloat(stockPortfolioMean).toFixed(2)}%</div>
            </td>




          </tr>
        </table>
      </div>

 



    </>
  );
}

export default Results;