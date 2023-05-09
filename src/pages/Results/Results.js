import React, { Component, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "../Results/Results.scss"


function Results({ logo1, profile1, m1, s1 }) {

  const series = [
    {
      name: profile1,
      data: [
        [s1, m1]
      ]
    },
    {
      name: 'Instagram',
      data: [
        [2, 1.5]
      ]
    },
    {
      name: 'Meta',
      data: [
        [1.5, 1.5]
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
          'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
          'https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.jpg',
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
    <div id="chart">
      <ReactApexChart options={options} series={series} type="scatter" height={350} />
    </div>
  );
}

export default Results;