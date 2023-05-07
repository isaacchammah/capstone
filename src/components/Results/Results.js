import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";



function Page4({logo1}) {
    const series = [
      {
        name: 'Apple',
        data: [
          [1, 10]
        ]
      },
      {
        name: 'Instagram',
        data: [
          [2, 3]
        ]
      },
      {
        name: 'Meta',
        data: [
          [5, 7]
        ]
      },
      {
        name: 'Your portifolio',
        data: [
          [10, 5]
        ]
      },
      {
        name: 'Down-jones',
        data: [
          [6.4, 7],
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
      colors: ['black'],
      xaxis: {
        tickAmount: 10,
        min: 0,
        max: 20
      },
      yaxis: {
        tickAmount: 7
      },
      markers: {
        size: 20
      },
      fill: {
        type: 'image',
        opacity: 1,
        image: {
          src: [
            ,
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
            'https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.jpg',
            'https://thumbs.dreamstime.com/blog/2018/11/essential-tips-organizing-your-portfolio-29167-image42264873.jpg',
            'https://the5ers.com/wp-content/uploads/2019/09/DOW_JONES_logo_2013.png'
          ],
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
  
    return (
      <div id="chart">
        <ReactApexChart options={options} series={series} type="scatter" height={350} 
        />
              <img src={logo1.url} />

      </div>
      
    );
  }
  
  export default Page4;