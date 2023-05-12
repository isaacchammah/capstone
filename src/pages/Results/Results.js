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
      text: 'RISK X RETURN',
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
      height: 1000,
      type: 'scatter',
      animations: {
        enabled: false,

      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false
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
        text: 'Risk',
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
          fontSize: '15px'
        },
        formatter: function (value) {
          return value.toFixed(2) + "%";
        },
      },
    },

    markers: {
      size: 20
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
          'https://m.media-amazon.com/images/I/31mQDZK7HeL.__AC_SX300_SY300_QL70_FMwebp_.jpg'        ],
        width: 40,
        height: 40
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

  useEffect(() => {

    if (stockPortfoliRisk < risk && stockPortfolioMean > mean) {
      setMessage("YOU BEAT THE MARKET");
    } else if (stockPortfoliRisk > risk && stockPortfolioMean < mean) {
      setMessage("YOU DID NOT BEAT THE MARKET");
    } else if (stockPortfoliRisk > risk && stockPortfolioMean > mean) {
      setMessage("YOU ALMOST BEAT THE MARKET");
    } else if (stockPortfoliRisk < risk && stockPortfolioMean < mean) {
      setMessage("YOU ALMOST BEAT THE MARKET");
    }
  })



  return (
    <>

    

      <div className="info2" id= "results">
        <img className="number" src={number3} alt='numer-one' />
        <p className="instruction">Results, did you beat the market?</p>
      </div>

      <div id="chart" className="chart">
        <ReactApexChart className="results-graph" options={options} series={series} type="scatter" height={550} width={1250} />
      </div>


      <div className="app2">
        <table className="table3">
          <tr className="table2">

            <th> Assets/Values
              <div>Risk</div>
              <div>Return</div>

            </th>
          </tr>
          <tr>

            <td>
              {description1}
              <div> {parseFloat(s1).toFixed(2)}%</div>
              <div>{parseFloat(m1).toFixed(2)}%</div>
            </td>

            <td>
              {description2}
              <div> {parseFloat(s2).toFixed(2)}%</div>
              <div>{parseFloat(m2).toFixed(2)}%</div>
            </td>

            <td>
              {description3}
              <div> {parseFloat(s3).toFixed(2)}%</div>
              <div>{parseFloat(m3).toFixed(2)}%</div>
            </td>

            <td>
              {indexName}
              <div> {parseFloat(risk).toFixed(2)}%</div>
              <div>{parseFloat(mean).toFixed(2)}%</div>
            </td>

            <td>
              Your portfolio  
              <div>{parseFloat(stockPortfoliRisk).toFixed(2)}%</div>
              <div>{parseFloat(stockPortfolioMean).toFixed(2)}%</div>
            </td>




          </tr>
        </table>
      </div>

      <h1 className="message">
      {message && <p>{message}</p>}
    </h1>



    </>
  );
}

export default Results;