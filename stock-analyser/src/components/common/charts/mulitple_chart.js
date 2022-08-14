// import React, { Component } from 'react';
// import ReactApexChart from 'react-apexcharts';

// // Convert to function or const
// class MultipleChart extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
      
//         series: [{
//             name: "Revenue Growth",
//             data: this.props.firstValues
//           },
//           {
//             name: "Operating Expenses",
//             data: this.props.secondValues
//           }
//         ],
//         options: {
//           chart: {
//             height: 300,
//             type: 'line',
//             zoom: {
//               enabled: false
//             },
//           },
//           dataLabels: {
//             enabled: false
//           },
//           stroke: {
//             width: [5, 7, 5],
//             curve: 'straight',
//             dashArray: [0, 8, 5]
//           },
//           legend: {
//             tooltipHoverFormatter: function(val, opts) {
//               return val + ': ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
//             }
//           },
//           markers: {
//             size: 0,
//             hover: {
//               sizeOffset: 6
//             }
//           },
//           xaxis: {
//             categories: this.props.years,
//           },
//           tooltip: {
//             y: [
//               {
//                 title: {
//                   formatter: function (val) {
//                     return val
//                   }
//                 }
//               },
//               {
//                 title: {
//                   formatter: function (val) {
//                     return val
//                   }
//                 }
//               },
//             ]
//           },
//           // grid: {
//           //   borderColor: '#f1f1f1',
//           // }
//         }, 
//       };
//     }

  

//     render() {
//         return (
//             <div id="chart">
//                 <ReactApexChart options={this.state.options} series={this.state.series} type="line" width={260} height={200} />
//             </div>
//         );
//     }
// }

// export default MultipleChart;