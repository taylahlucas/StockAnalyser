import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

// Convert to function or const
class SingleChart extends Component {
    constructor(props) {
      super(props);
      this.state = {

        series: [{
            data: this.props.values
        }],
        options: {
          chart: {
            type: 'area',
            stacked: false,
            height: 150,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true
            },
            toolbar: {
              autoSelected: 'zoom'
            }
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
          },
          title: {
            text: "",
            align: 'left'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 90, 100]
            },
          },
          yaxis: {
            labels: {
              formatter: function (val) {
                return val.toFixed(2)
              },
            },
            title: {
              text: 'Value'
            },
          },
          xaxis: {
              categories: this.props.years
          },
          tooltip: {
            shared: false,
            y: {
                formatter: function (val) {
                    return val
              }
            }
          }
        },
      };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={150} width={250} />
            </div>
        );
    }
}

export default SingleChart;