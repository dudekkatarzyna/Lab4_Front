<template>
  <div id="chart">
    <apexchart ref="chart" type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import apexchart from 'vue-apexcharts'

export default {
  name: "histogram",
  components: {
    apexchart
  },
  props: {
    sensors_data: {
      type: Array,
      required: true
    },
    parameter: {
      type: String,
      required: true
    }
  },
  mounted() {

    const grouped = this.groupBy(this.$props.sensors_data, "Date_n_Time")

    Object.keys(grouped).forEach(key => {

      let avg = 0;
      if (grouped[key].length === 1)
        avg = grouped[key][0][this.$props.parameter]
      else {
        let sum = 0;
        grouped[key].forEach(val => {
          sum += val[this.$props.parameter]
        })
        avg = sum / grouped[key].length;
      }

      this.series[0].data.push(avg)
      this.chartOptions.xaxis.categories.push(key)
    })
    //  console.log(this.series[0].data)
    console.log(this.chartOptions.xaxis.categories)
    this.$refs.chart.updateSeries([{
      data: this.series[0].data
    }])
    this.$forceUpdate();
  },
  methods: {
    groupBy(xs, key) {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    },
    getParameter() {
      return this.$props.parameter
    }
  },
  data: function () {
    return {
      series: [{
        name: this.getParameter(),
        data: []
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        colors: ["#858177"],
        xaxis: {
          categories: [],
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: true,
            formatter: function (val) {
              return val + "";
            }
          }

        },
        title: {
          text: this.getParameter(),
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      }
    }
  }

}
</script>

<style scoped>

</style>