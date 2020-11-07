<template>

  <div id="chart">
    <apexchart ref="chart" type="heatmap" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>

</template>

<script>
import apexchart from 'vue-apexcharts'
import {generateData} from "@/js/generateData";

export default {
  name: "heatmap",
  components: {
    apexchart
  },
  data: function () {
    return {

      series: [],
      chartOptions: {
        chart: {
          height: 600,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#008FFB"],
        title: {
          text: 'HeatMap Chart (Single color)'
        },
      },
    }


  }, methods: {

  },
  mounted() {
    setTimeout(() => {
      const newData=generateData()
      console.log(newData)
      this.$refs.chart.updateSeries(newData)
    }, 3000)

  }
}
</script>

<style>


</style>