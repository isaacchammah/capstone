import React, { Component, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "../Results/Results.scss"


function Results({ logo1, description1, m1, s1, logo2, description2, m2, s2, logo3, description3, m3, s3 }) {

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
      name: 'Your portifolio',
      data: [
        [1, 2]
      ]
    },
    {
      name: 'Down-jones',
      data: [
        [0.4, 0.5],
      ]
    }
  ];

  const options = {
    chart: {
      height: 350,
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
    colors: ['blue'],
    xaxis: {
      tickAmount: 5,
      min: 0,
      max: 20
    },
    yaxis: {
      tickAmount: 5
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
          'https://thumbs.dreamstime.com/blog/2018/11/essential-tips-organizing-your-portfolio-29167-image42264873.jpg',
          'https://the5ers.com/wp-content/uploads/2019/09/DOW_JONES_logo_2013.png'
        ],
        width: 40,
        height: 40
      }
    },
    // yaxis: {
    //   labels: {
    //     formatter: function (value) {
    //       return value + "%";
    //     }
    //   },
    // },
    // xaxis: {
    //   labels: {
    //     formatter: function (value) {
    //       return value + "%";
    //     }
    //   }
    // },
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

  return (
    <>
    <div id="chart">
      <ReactApexChart  className="results-graph" options={options} series={series} type="scatter" height={350} width={1000} />
    </div>

<div>
<p>{m1}</p>
<p>{s1}</p>
<p>{m2}</p>
<p>{s2}</p>
<p>{m3}</p>
<p>{s3}</p>

</div>
</>
  );
}

export default Results;